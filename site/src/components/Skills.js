import Card from 'react-bootstrap/Card';
import BootstrapSvg from '../images/bootstrap.svg';
import HtmlSvg from '../images/html.svg';
import CssSvg from '../images/css.svg';
import JavascriptSvg from '../images/javascript.svg';
import NodeSvg from '../images/node.svg';
import ReactSvg from '../images/react.svg';
import JquerySvg from '../images/jquery.svg';


function Skills () {
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <img className='svg-icons' src={BootstrapSvg} alt=''/> 
        <img className='svg-icons' src={HtmlSvg} alt=''/> 
        <img className='svg-icons' src={CssSvg} alt=''/> 
        <img className='svg-icons' src={JavascriptSvg} alt=''/> 
        <img className='svg-icons' src={NodeSvg} alt=''/> 
        <img className='svg-icons' src={ReactSvg} alt=''/> 
        <img className='svg-icons' src={JquerySvg} alt=''/> 
        
      </Card.Body>
    </Card>
)}

export default Skills;