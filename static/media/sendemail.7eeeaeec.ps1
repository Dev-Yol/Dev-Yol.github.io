$EmailFrom = "sender@gmail.com"
$EmailTo = "recipient@email.com"
$Subject = "Subject"
$Body = "Body"
$SMTPServer = "smtp.gmail.com"
$SMTPClient = New-Object Net.Mail.SmtpClient($SmtpServer, 587)
$SMTPClient.EnableSsl = $true
$SMTPClient.Credentials = New-Object System.Net.NetworkCredential("sender@gmail.com", "YourGmailPassword");
$SMTPClient.Send($EmailFrom, $EmailTo, $Subject, $Body)