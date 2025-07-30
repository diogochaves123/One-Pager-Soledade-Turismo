# 🚀 Configuração Resend + Netlify - Soledade Turismo

## ✅ **O que foi configurado:**

- ✅ **Função Netlify** para processar formulários
- ✅ **Integração com Resend** para envio de emails
- ✅ **Suporte a upload de PDF** nos currículos
- ✅ **Frontend atualizado** para usar a nova API

## 🔧 **Próximos passos:**

### **1. Obter API Key do Resend:**
1. Acesse: https://resend.com/
2. Faça login com `tisoledadeturismo@gmail.com`
3. Vá em "API Keys"
4. Clique em "Create API Key"
5. Copie a chave (algo como `re_abc123...`)

### **2. Configurar no Netlify:**
1. Faça deploy do projeto no Netlify
2. Vá em "Site settings" → "Environment variables"
3. Adicione:
   - **Key:** `RESEND_API_KEY`
   - **Value:** Sua API Key do Resend

### **3. Testar o formulário:**
1. Preencha o formulário "Trabalhe Conosco"
2. Faça upload de um PDF
3. Clique em "Enviar Candidatura"
4. Verifique o email em `tisoledadeturismo@gmail.com`

## 📧 **Vantagens do Resend:**

- ✅ **3.000 emails/mês** gratuitos
- ✅ **Suporte a anexos** (PDF, DOC, etc.)
- ✅ **Emails mais bonitos** e profissionais
- ✅ **Melhor deliverability**
- ✅ **Dashboard** para ver todos os emails

## 🎯 **Como funciona:**

1. **Usuário** preenche o formulário
2. **Frontend** envia dados para função Netlify
3. **Função Netlify** processa e envia email via Resend
4. **Resend** envia email com PDF anexado
5. **Você recebe** o email em `tisoledadeturismo@gmail.com`

## 🚀 **Pronto para usar!**

Configure a API Key do Resend no Netlify e teste o formulário! 