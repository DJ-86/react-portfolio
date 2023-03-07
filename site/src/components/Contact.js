import Card from 'react-bootstrap/Card';

function Contact () {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <form action="?" method="POST" id="contact-form">
          <input type="hidden" name="contact_number" />
          <input class="right" type="text" name="from_name" placeholder="NAME" />
          <input class="right" type="email" name="user_email" placeholder="EMAIL" />
          <textarea class="botRight" id="messageBox" name="message" placeholder="MESSAGE"></textarea>
          <input type="submit"  value="Send" />
        </form>  
      </Card.Body>
    </Card>
)}

export default Contact;