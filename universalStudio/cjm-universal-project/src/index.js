import React, { useEffect, useLayoutEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";

import { Main } from './contents/Main.jsx'
import { Attraction } from './contents/Attraction.jsx'
import { SeasonalMenu } from './contents/SeasonalMenu.jsx'
import { Goods } from './contents/Goods.jsx'
// import {CustomerCenter} from './contents/CustomerCenter.jsx'
import { Ticket } from './contents/TIcket.jsx';
import { Detail } from './contents/Detail.jsx';
import { Layout } from './layout/Layout';
import { Member } from './contents/Member.jsx';
import { SchPage } from './contents/SchPage.jsx';

// CSS 불러오기
import './css/common.css';
import { Hotel } from './contents/Hotel.jsx';
import { Login } from './contents/Login.jsx';
import { AreaType } from './contents/AreaType.jsx';
import { CustomerCenter2 } from './contents/CustomerCenter2.jsx';
import { Loading } from './contents/Loading.jsx';

export default function App() {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    // 비동기 작업이 끝나면 로딩 상태 변경
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 4000));
      setLoading(false);
    };

    fetchData();

  }, []);

  if (loading) {
    // 로딩 중일 때 Loading 컴포넌트 렌더링
    return <Loading />;
  }


  return (
    // <BrowserRouter>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='areaType' element={<AreaType />} />
          <Route path='seasonalMenu/*' element={<SeasonalMenu />} />
          <Route path='goods/*' element={<Goods />} />
          <Route path='ticket' element={<Ticket />} />
          <Route path='customerCenter' element={<CustomerCenter2 />} />
          <Route path='hotel' element={<Hotel />} />
          <Route path='schpage' element={<SchPage />} />
          <Route path='detail' element={<Detail />} />
          <Route path='member' element={<Member />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
      {/* // </BrowserRouter> */}
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);