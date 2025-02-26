import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';  
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';


function App() {

  
  return (
    <div className="App">
      <div className="sideBar">
          <div className="upperSide">
            <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatPDF</span></div>
          <button className="midBtn"><img src={addBtn} alt="cuộc trò chuyện mới" className="addBtn" />Cuộc trò chuyện mới</button>
          <div className="upperSideBottom">
          <button className="query"><img src={msgIcon} alt="Query" />Syllabus</button>
          <button className="query"><img src={msgIcon} alt="Query" />Buổi 1</button>
          </div>
          </div>
          <div className="lowerSide">
            <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Home</div>
            <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Home</div>

          </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className= 'chatImg' src={userIcon} alt=""  /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quidem aspernatur odit totam at id! Unde adipisci repellat nesciunt veritatis.</p>
          </div>
          <div className="chat bot">
            <img className= 'chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur hic voluptas nostrum reiciendis, unde beatae? Ipsa iure eveniet deleniti sint ut dolores cupiditate doloribus quae soluta voluptas, laboriosam recusandae debitis atque nam voluptatum possimus temporibus beatae? Doloremque, sint corporis laborum, eos expedita delectus numquam consequatur sed, unde tenetur dolor dolorum saepe perferendis? Doloribus optio beatae exercitationem error ut facilis voluptate ex obcaecati! Vel provident quam et exercitationem ipsam dolores doloremque porro iste? Omnis temporibus harum debitis, tenetur voluptatibus, soluta, nam quae consequatur quis autem consectetur? Laborum ad non labore velit, commodi aspernatur. Facilis, qui. Aperiam ratione voluptatibus saepe eveniet blanditiis.</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send a message' /><button className="send" ><img src={sendBtn} alt="Send" /></button>
            
        </div>
        <p>ChatPDF can make mistakes. Please check out important information.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
