import { ContactFormData } from '../types';

const RESEND_API_KEY = 're_2iH7CdLE_Fid2mxNorrgfiVsQFgy31rag';

export const sendContactForm = async (data: ContactFormData): Promise<boolean> => {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        // Note: On the Resend free tier, you can usually only send to the email address 
        // that created the account or the specific verified domain.
        // We use 'delivered@resend.dev' as a safe sink that always returns 200 OK for testing 
        // without spamming real inboxes if the domain isn't verified.
        // In a real app with a verified domain, you would set 'to' to the agency owner's email.
        to: 'delivered@resend.dev', 
        subject: `New Inquiry: ${data.subject} - ${data.name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h2 style="color: #0284c7; margin-bottom: 24px;">New Contact Form Submission</h2>
            
            <div style="margin-bottom: 16px;">
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">Full Name</p>
              <p style="margin: 0; font-weight: 600; font-size: 16px;">${data.name}</p>
            </div>

            <div style="margin-bottom: 16px;">
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">Email Address</p>
              <p style="margin: 0; font-weight: 600; font-size: 16px;">${data.email}</p>
            </div>

            <div style="margin-bottom: 16px;">
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">Phone Number</p>
              <p style="margin: 0; font-weight: 600; font-size: 16px;">${data.phone || 'Not provided'}</p>
            </div>

            <div style="margin-bottom: 16px;">
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">Service Interest</p>
              <p style="margin: 0; font-weight: 600; font-size: 16px;">${data.serviceInterest}</p>
            </div>

            <div style="margin-bottom: 16px;">
              <p style="margin: 4px 0; color: #6b7280; font-size: 14px;">Subject</p>
              <p style="margin: 0; font-weight: 600; font-size: 16px;">${data.subject}</p>
            </div>

            <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
            
            <h3 style="font-size: 16px; margin-bottom: 12px;">Message:</h3>
            <div style="background: #f9fafb; padding: 16px; border-radius: 8px; font-size: 15px; line-height: 1.6;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Resend API Error:', errorData);
        throw new Error('Failed to send email');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};