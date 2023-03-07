import Card from 'react-bootstrap/Card';

function About() {
  return (
    <div className='about-me'>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Who Am I?
        </Card.Title>
        <Card.Text>
        I'm a guy in my 30's that decided to change my career during lockdown. I quit my job working in a freezer and began researching careers that one could self-teach. I enjoy problem solving and as a gamer, already spend loads of time on my PC so the path of becoming a developer was appealing. Looking back, I realise I had very little idea of what the scope of being a developer truly was.
After bumbling my way through more than a few tutorials, I was becoming frustrated with my progress - I felt like I was learning syntax but not doing much problem solving. I read some advice to the effect of "Build things and follow less tutorials". By that time, I had learned the basics of HTML and CSS and had been struggling with JavaScript for a while but thought I'd give it a go, so I built my house calculator. I knew it was basic but I was immensely proud of putting theory into practice. 
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>What I'm Doing</Card.Title>
        <Card.Text>
        I'm building things! What things? I'm not entirely sure yet but I've been enjoying building tools to suit a variety of use cases in the meantime and it's my intention to maintain this page with things I've built either way.
        </Card.Text>
      </Card.Body>
    </Card>
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Where I Aim To Be</Card.Title>
        <Card.Text>
        My goal right now is simple. To become employed as a developer. It is a large goal but one I will continue to pursue until I achieve it.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default About