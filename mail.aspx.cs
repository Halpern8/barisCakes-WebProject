using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;
using System.Net;
using System.Net.Mail;
using Newtonsoft.Json;

public partial class mail : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        var sr = new StreamReader(Request.InputStream);
        string content = sr.ReadToEnd();
        content = content.Replace("Order:", "Order:<br>");
        content = content.Replace("[{", "");
        content = content.Replace("}]", "");
        content = content.Replace(",{", "");
        content = content.Replace("}", "<br>");
        content = content.Replace("\"", "");
        content = content.Replace(",", ",  ");
        content = content.Replace(":", ":  ");
        content = content.Replace("{", "<br>");



        MailMessage mail = new MailMessage();
        mail.To.Add("bariscakes@gmail.com");
        mail.To.Add("bariscakes@gmail.com");
        mail.From = new MailAddress("bariscakes@gmail.com");
        mail.Subject = "baris";
        mail.Body = content;

        mail.IsBodyHtml = true;
        SmtpClient smtp = new SmtpClient();
        smtp.Host = "smtp.gmail.com";
        smtp.Credentials = new System.Net.NetworkCredential
             ("bariscakes@gmail.com", "webproject");
        smtp.Port = 587;

        smtp.EnableSsl = true;
        smtp.Send(mail);
    }
}