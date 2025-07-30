# 🚀 Configuração da Seção "Trabalhe Conosco"

## ✅ O que foi implementado

A seção "Trabalhe Conosco" foi criada com sucesso no site da Soledade Turismo, incluindo:

- **Design moderno** seguindo o padrão visual do site
- **Formulário completo** com validações
- **Upload de currículo** com validação de arquivo
- **Responsividade** para todos os dispositivos
- **Feedback visual** para o usuário
- **Navegação integrada** no menu e footer

## 🔧 Configuração do Formulário

### Opção 1: Formspree (Recomendado - Gratuito)

1. **Criar conta no Formspree:**
   - Acesse: https://formspree.io
   - Faça cadastro gratuito
   - Crie um novo formulário

2. **Configurar o formulário:**
   - Copie o ID do formulário fornecido pelo Formspree
   - Substitua `YOUR_FORM_ID` no arquivo `index.html` linha 108:
   ```html
   <form id="careers-form" class="careers-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" enctype="multipart/form-data">
   ```

3. **Configurar email:**
   - No painel do Formspree, configure o email que receberá as candidaturas
   - Ative as notificações por email

### Opção 2: Netlify Forms (Se hospedar no Netlify)

1. **Adicionar atributo data-netlify:**
   ```html
   <form id="careers-form" class="careers-form" data-netlify="true" enctype="multipart/form-data">
   ```

2. **Configurar no painel do Netlify:**
   - Acesse o painel do seu site no Netlify
   - Vá em "Forms" para ver as submissões
   - Configure notificações por email

### Opção 3: EmailJS (Para envio direto por email)

1. **Instalar EmailJS:**
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```

2. **Configurar no JavaScript:**
   - Crie conta no EmailJS
   - Configure template de email
   - Atualize o código JavaScript com suas credenciais

## 📧 Campos do Formulário

O formulário inclui os seguintes campos:

- **Nome Completo** (obrigatório)
- **Email** (obrigatório)
- **Telefone** (obrigatório)
- **Cargo de Interesse** (obrigatório)
  - Motorista
  - Auxiliar de Motorista
  - Atendente
  - Vendedor
  - Administrativo
  - Outro
- **Experiência Profissional** (opcional)
- **Currículo** (obrigatório - PDF, DOC, DOCX - máx. 5MB)
- **Concordância com LGPD** (obrigatório)

## 🎨 Personalização

### Cores e Estilos
As cores seguem as variáveis CSS definidas no arquivo `style.css`:
- `--primary-color: #2ec4f1`
- `--secondary-color: #005baa`
- `--accent-color: #f39c12`

### Textos
Você pode personalizar os textos editando o arquivo `index.html`:
- Título da seção
- Descrição dos benefícios
- Opções de cargos
- Mensagens de validação

## 📱 Responsividade

A seção é totalmente responsiva:
- **Desktop**: Layout em duas colunas
- **Tablet**: Layout adaptado
- **Mobile**: Layout em coluna única

## 🔒 Segurança e Validação

### Validações Implementadas:
- **Campos obrigatórios** verificados
- **Formato de email** validado
- **Tamanho do arquivo** limitado a 5MB
- **Tipo de arquivo** restrito a PDF, DOC, DOCX
- **Formatação de telefone** automática

### LGPD:
- Checkbox obrigatório para concordância
- Dados tratados conforme legislação

## 🚀 Funcionalidades JavaScript

### Recursos Implementados:
- **Upload de arquivo** com feedback visual
- **Validação em tempo real**
- **Formatação de telefone** automática
- **Estados de loading** no botão
- **Notificações** de sucesso/erro
- **Reset automático** do formulário

## 📊 Analytics (Opcional)

Para acompanhar as candidaturas, você pode adicionar:

### Google Analytics:
```javascript
// No evento de submit do formulário
gtag('event', 'form_submit', {
  'form_name': 'careers_form',
  'cargo': document.getElementById('cargo').value
});
```

### Google Tag Manager:
- Configure eventos personalizados
- Acompanhe conversões

## 🔧 Manutenção

### Atualizações Recomendadas:
1. **Revisar cargos** periodicamente
2. **Atualizar benefícios** conforme necessário
3. **Verificar emails** de candidaturas
4. **Backup** das configurações

### Monitoramento:
- Verificar submissões regularmente
- Testar formulário mensalmente
- Validar responsividade em novos dispositivos

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique a documentação do serviço escolhido
2. Teste o formulário em diferentes navegadores
3. Verifique logs de erro no console do navegador

---

**✨ A seção "Trabalhe Conosco" está pronta para uso! Configure o serviço de envio de emails e comece a receber candidaturas.** 