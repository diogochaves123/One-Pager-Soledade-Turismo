# 📧 Configuração EmailJS - Soledade Turismo

## 🚀 **Por que EmailJS?**

- ✅ **200 emails/mês GRÁTIS**
- ✅ **Upload de arquivo funcionando**
- ✅ **Configuração simples**
- ✅ **Sem problemas de detecção**
- ✅ **Muito mais confiável**

## 📋 **Passo a Passo:**

### 1. **Criar conta no EmailJS**
- Acesse: https://www.emailjs.com/
- Clique em "Sign Up" (gratuito)
- Use seu email: `tisoledadeturismo@gmail.com`

### 2. **Configurar Email Service**
- No dashboard, vá em "Email Services"
- Clique em "Add New Service"
- Escolha "Gmail"
- Conecte com: `tisoledadeturismo@gmail.com`

### 3. **Criar Template de Email**
- Vá em "Email Templates"
- Clique em "Create New Template"
- **Nome:** `careers-template`
- **Assunto:** `Nova Candidatura - Soledade Turismo`

### 4. **Template HTML:**
```html
<h2>🚀 Nova Candidatura Recebida</h2>

<p><strong>Nome:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Telefone:</strong> {{telefone}}</p>
<p><strong>Cargo:</strong> {{cargo}}</p>
<p><strong>Experiência:</strong> {{experiencia}}</p>

<hr>

<p><strong>Mensagem:</strong> {{message}}</p>

<p>---</p>
<p><em>Enviado via formulário do site Soledade Turismo</em></p>
```

### 5. **Obter as Chaves**
Após configurar, você terá:
- **Service ID** (ex: `service_abc123`)
- **Template ID** (ex: `template_xyz789`)
- **Public Key** (ex: `user_def456`)

### 6. **Atualizar o Código**
Substitua no arquivo `js/script.js`:

```javascript
// Linha 3: Substitua YOUR_PUBLIC_KEY
emailjs.init("SEU_PUBLIC_KEY_AQUI");

// Linha 89: Substitua YOUR_SERVICE_ID e YOUR_TEMPLATE_ID
emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
```

## 🎯 **Exemplo Final:**
```javascript
emailjs.init("user_abc123def456");
emailjs.send('service_xyz789', 'template_careers', templateParams)
```

## ✅ **Vantagens:**
- **Funciona imediatamente** após configuração
- **Upload de arquivo** sem problemas
- **Notificações** em tempo real
- **Sem spam** - emails vão direto para caixa principal
- **Dashboard** para ver todas as candidaturas

## 🚀 **Próximos Passos:**
1. Configure o EmailJS seguindo os passos acima
2. Me envie as chaves (Service ID, Template ID, Public Key)
3. Eu atualizo o código com suas chaves
4. Faça o deploy e teste!

**EmailJS é a solução definitiva!** 🎉 