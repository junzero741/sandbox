import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">

      <Nav></Nav>
      <List></List>
      <Modal></Modal>


    </div>
  );
}

function Nav() {
  return (
    <div className="black-nav">
      <div>Glog</div>
    </div>
  )
}

function List() {

  let [articleTitle, changeList] = useState(['남자 코트 추천', '강남 맛집', '리액트란 무엇인가', '타입스크립트란']);
  let [likeCount, plusLike] = useState(0);

  const today = new Date();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  function listSort() {
    const newArray = [...articleTitle].sort((a, b) => a.length - b.length);
    changeList(newArray);
  }

  return (
    <div className="list">
      <h3>{articleTitle[0]} <span onClick={() => { plusLike(++likeCount) }}>👍</span><span>{likeCount}</span></h3>
      <p>{todayMonth} 월 {todayDate} 일 발행</p>
      <hr />
      <h3>{articleTitle[1]}</h3>
      <p>{todayMonth} 월 {todayDate} 일 발행</p>
      <hr />
      <h3>{articleTitle[2]}</h3>
      <p>{todayMonth} 월 {todayDate} 일 발행</p>
      <hr />
      <h3>{articleTitle[3]}</h3>
      <p>{todayMonth} 월 {todayDate} 일 발행</p>
      <hr />
      <button onClick={listSort}>글자수 기준 정렬하기</button>
    </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;
