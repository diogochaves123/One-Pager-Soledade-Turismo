const { Resend } = require('resend');

exports.handler = async (event, context) => {
  // Configurar CORS para permitir requisições do frontend
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Responder a requisições OPTIONS (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Verificar se é uma requisição POST
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        headers,
        body: JSON.stringify({ error: 'Método não permitido' })
      };
    }

    // Parsear os dados do formulário
    const formData = JSON.parse(event.body);
    const { nome, email, telefone, cargo, experiencia, curriculo } = formData;

    // Validar dados obrigatórios
    if (!nome || !email || !telefone || !cargo) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Dados obrigatórios não fornecidos' })
      };
    }

    // Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Preparar anexo se houver currículo
    let attachments = [];
    if (curriculo && curriculo.data) {
      attachments.push({
        content: curriculo.data,
        filename: curriculo.name || 'curriculo.pdf',
        contentType: curriculo.type || 'application/pdf'
      });
    }

          // Enviar email
      const { data, error } = await resend.emails.send({
        from: 'Soledade Turismo <onboarding@resend.dev>',
        to: ['tisoledadeturismo@gmail.com'],
      subject: 'Nova Candidatura - Soledade Turismo',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">🚀 Nova Candidatura Recebida</h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Cargo:</strong> ${cargo}</p>
            <p><strong>Experiência:</strong> ${experiencia || 'Não informado'}</p>
          </div>

          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
          
          <p><strong>Mensagem:</strong> Nova candidatura recebida de ${nome} para o cargo de ${cargo}</p>
          
          ${curriculo ? `<p><strong>Currículo:</strong> Anexado ao email</p>` : ''}
          
          <p style="color: #64748b; font-size: 12px; margin-top: 30px;">
            ---<br>
            Enviado via formulário do site Soledade Turismo
          </p>
        </div>
      `,
      attachments
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Erro ao enviar email' })
      };
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Candidatura enviada com sucesso!',
        emailId: data.id 
      })
    };

  } catch (error) {
    console.error('Erro na função:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Erro interno do servidor' })
    };
  }
}; 