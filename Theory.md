// axios (asyns await) //
ex
import axios from 'axios';

    async function fetching() {
        const url = "api 엔드포인트";
        url += `${경로}`;

        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error;
        }
    }

    api 엔드포인트 : 서버 요청 url
    경로 : 서버 요청 경로
    try ~ catch : try을 실행하고 에러가 발생하면 catch 실행
    async : 선언된 해당 fetching 함수를 비동기로 실행할 것을 명시하고 프로미스를 반환함
    await : async가 선언된 함수 범위 내에서 await이 선언된 코드를 프로미스가 반환하기 전까지 중지하고 실행 즉 해당 함수에서 제일 나중에 실행되도록 정의
    axios : fetch과 동일한 개념이며 자동으로 JSON 변환하여 데이터를 반환함 + HTTP 요청 메서드를 가지고 있음 (get, post, delete 등등)

// react-router //
ex
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

    return (
        <Router>
            <Link to="/" />
            <Link to="/about" />
            <Link to="/product" />
            <Link to="/member" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/member" element={<Menber />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    )

    BrowserRouter as Router : BrowserRouter는 라우팅 기능을 구현할 환경을 조성하는 컴포넌트로 프로젝트의 최상위 엘리먼트로 존재해야함 as 는 해당 컴포넌트에 별칭을 부여하는것
    Routes : 각 페이지를 정의하는 Route를 하나의 모듈로 묶어주는 컴포넌트
    Route : 하나의 페이지를 나타내는 컴포넌트
        - path : 해당 페이지의 url 경로를 정의 (* 을 전달하면 에러가 발생 시 이동하게 되는 페이지)
        - element : 해당 경로의 페이지를 정의할 컴포넌트
    Link : a 태그의 동작으로 사용자가 다른 경로의 페이지로 이동할 수 있도록 눈에 보이는 컴포넌트
        - to : 클릭 시 어떤 경로의 페이지로 이동할지 경로를 정의
    useNavigate : 훅의 하나로 JSX 코드 외에 프로그래밍 로직에서 사용하여 인수로 전달된 경로로 강제 이동시킴
        const navigate = useNavigate();
        const goToAbout = () => { // 이 함수가 실행되면 about 경로로 강제 이동
            navigate('/about');
        };

// useSWR //
ex
import useSWR from 'swr';

    const { data, error } = useSWR(api 엔드포인트 , 데이터 요청 함수);

    data : 데이터 요청에 따른 데이터를 관리
    error : 데이터 요청에 따른 에러 상태를 관리

    데이터가 요청되거나 값이 변경되면 모든 실행작업을 제쳐두고 업데이트 된 데이터에 대한 최신 값으로 변경하는 동작으로 해당 데이터와 관련있는 모든 코드를 재실행하여
    리렌더링(렌더링을 처음부터 다시함)함
    * 서버 요청에 따른 데이터 관리에 용이하며 최신 상태의 데이터 값을 유지할 수 있음
