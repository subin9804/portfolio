

export default function Project() {

    return (
        <section id="projects">
                <div class="index">
                    <ul>
                        <li id="switchB">Back</li>
                        <li id="switchF" class="active">Front</li>
                    </ul>
                </div>

                <h1>PROJECTS</h1>
                
                <div id="front">
                    <div id="item2" class="item wrapper">
                        <h3>1. 부산 맛집 지도</h3>
                        <div class="project-box">
                            <div class="imgs">
                                <img src="img\busan2.PNG" alt=""/>
                                <img src="img\busan4.PNG" alt=""/>
                            </div>
                            <div class="description">
                                <h4><i class="fa-solid fa-star"></i> 개발 주요사항</h4>
                                <p> - React 사용경험 및 숙련도 향상을 위해 진행한 개인 사이드 프로젝트</p>
                                <p> - 부산시청에서 배포한 공공API를 이용한 맛집 소개 지도</p>
                                <p> - kakao맵 API로 전체 맛집 또는 단일 맛집 위치 표시</p>
                                <p> - LocalStorage를 이용하여 백앤드 없이 닉네임 및 즐겨찾기 목록 저장</p>
                                <p> - Math.random메서드를 이용한 모달 형태의 랜덤 맛집 추천기능 구현</p>
                                <p></p>
                                <h4><i class="fa-solid fa-atom"></i> 기술 스택</h4>
                                <p> - React.js</p>
                                <p> - Tailwind</p>
                                <p> - Git</p>
                                <h4><i class="fa-solid fa-pen-nib"></i> 배운점</h4>
                                <p>반복되는 코드를 줄이고 함수컴포넌트의 재사용에 신경쓰며 제작했습니다. 
                                    프론트엔드로만 제작하기 위해 간단한 정보만을 localStorage에 저장하게 했으며 로그아웃과 동시에 삭제되도록 만들었습니다.
                                    공공 API 사용이 익숙하지 않아 데이터를 불러오는 데에 시간이 걸렸지만 
                                    이 프로젝트를 통해 API에 대해 쉽게 이해할 수 있었으며 데이터를 다루는 방법을 익힐 수 있었습니다.
                                    
                                </p>
                                <h4><i class="fa-solid fa-paperclip"></i>배포링크</h4>
                                <a href="https://busan-eat.netlify.app">https://busan-eat.netlify.app</a>
                                <h4><i class="fa-brands fa-github"></i> 자세히 보기</h4>
                                <a href="https://github.com/subin9804/dubidubob/tree/master/busan-eat">busan-eat 레포지토리 바로가기</a>
                            </div>
                        </div>
                    </div>
                
                    <div id="item3" class="item wrapper">
                        <h3>2. 인스타그램 서비스 클론코딩</h3>
                        <div class="project-box">
                            <div class="imgs">
                                <img src="img\insta.png" alt=""/>
                                <img src="img\insta02.png" alt=""/>
                            </div>
                            <div class="description">
                                <h4><i class="fa-solid fa-star"></i> 개발 주요사항</h4>
                                <p> - React.js와 Node.js, express를 이용하여 프론트와 백엔드 모두 구현</p>
                                <p> - MongoDB로 아티클, 유저 등의 정보를 저장하며 NoSQL의 사용을 익힘</p>
                                <p> - passport와 jwt를 사용하여 로그인 기능 구현</p>
                                <p> - 유저 검색기능, 팔로우 기능, 댓글 기능 구현</p>
                                <p></p>
                                <h4><i class="fa-solid fa-atom"></i> 기술 스택</h4>
                                <table>
                                    <tr>
                                        <td> - React.js</td>
                                        <td> - express</td>
                                    </tr>
                                    <tr>
                                        <td> - MongoDB</td>
                                        <td> - Passport</td>
                                    </tr>
                                    <tr>
                                        <td> - Tailwind</td>
                                        <td> - Git</td>
                                    </tr>
                                </table>

                                <h4><i class="fa-solid fa-pen-nib"></i> 배운점</h4>
                                <p>
                                    서버와 클라이언트를 모두 다뤄보게 되면서 두 분야 사이의 역할과 관계에 대해 이해할 수 있었습니다. 
                                    Node.js로 처름 백엔드를 구성해보는 것은 어려웠으나, 생소했던 미들웨어나 cors 등의 개념들을 검색하고 알아가며 차근차근 구현하는 과정에서 많은 것들을 배웠습니다.
                                    또한 주로 MySQL을 사용했던 데에 반해 NoSQL인 MongoDB를 사용해봄으로써 NoSQL과 관계형 DB사이의 장단점을 체감할 수 있었습니다.
                                </p>
                                <h4><i class="fa-brands fa-github"></i> 자세히 보기</h4>
                                <a href="https://github.com/subin9804/Instagram-clone.git">instagram-clone 레포지토리 바로가기</a>
                            </div>
                        </div>
                    </div>
                </div>

                    <div id="back" class="hidden">
                    <div id="item4" class="item wrapper">
                        <h3>1. 도서관리시스템</h3>
                        <div class="project-box">
                            <div class="imgs">
                                <img src="img\library2.PNG" alt=""/>
                                <img src="img\library3.PNG" alt=""/>
                            </div>
                            <div class="description">
                                <h4><i class="fa-solid fa-star"></i> 개발 주요사항</h4>
                                <p> - 웹개발 강의 수강 후 제작한 팀프로젝트</p>
                                <p> - 도서관리 시스템을 구축하여 유저정보, 도서정보, 대여정보를 관리하는 프로젝트</p>
                                <p> - pagination과 옵션을 추가한 검색기능 구현</p>
                                <p> - Spring Security로 로그인 기능 구현</p>
                                <p> - user와 admin으로 권한을 달리하여 특정 페이지에 대한 접근 통제기능</p>
                                
                                <h4><i class="fa-solid fa-atom"></i> 기술 스택</h4>
                                <table>
                                    <tr>
                                        <td> - Java</td>
                                        <td> - SpringBoot</td>
                                    </tr>
                                    <tr>
                                        <td> - Thymeleaf</td>
                                        <td> - Maven</td>
                                    </tr>
                                    <tr>
                                        <td> - SpringSecurity</td>
                                        <td>  - MySQL</td>
                                    </tr>
                                    <tr>
                                        <td> - Git</td>
                                        <td></td>
                                    </tr>
                                </table>
                                <h4><i class="fa-solid fa-pen-nib"></i> 배운점</h4>
                                <p>
                                    SpringBoot로 진행한 첫 팀프로젝트로 저는 백엔드에서 대출기능과 도서정보 관리기능을 맡아 구현했습니다.
                                    Pagination과 검색기능, Jpa나 Querydsl에 대해 공부해볼 수 있는 좋은 기회였으며 SpringSecurity로 더 안전하게 개인정보를 관리하도록 했습니다. 
                                </p>
                                <h4><i class="fa-brands fa-github"></i> 자세히 보기</h4>
                                <a href="https://github.com/Skyharang/Library_project.git">Library_project 레포지토리 바로가기</a>
                            </div>
                        </div>
                    </div>
                
                    <div id="item5" class="item wrapper">
                        <h3>2. 스프링부트 게시판</h3>
                        <div class="project-box">
                            <div class="imgs">
                                <img src="img\board.PNG" alt=""/>
                                <img src="img\board2.PNG" alt=""/>
                            </div>
                            <div class="description">
                                <h4><i class="fa-solid fa-star"></i> 개발 주요사항</h4>
                                <p> - 필요한 용도로 커스텀할 수 있는 게시판 제작 프로젝트</p>
                                <p> - SpringSecurity, H2database, thymeleaf 등의 의존성 사용</p>
                                <p> - 파일 업로드 설정, 조회수 기록 기능 구현</p>
                                <p> - 에러 페이지 설정</p>
                                <p> - 테스트코드 사용</p>

                                <h4><i class="fa-solid fa-atom"></i> 기술 스택</h4>
                                <table>
                                    <tr>
                                        <td> - Java</td>
                                        <td> - SpringBoot</td>
                                    </tr>
                                    <tr>
                                        <td> - Thymeleaf</td>
                                        <td> - Maven</td>
                                    </tr>
                                    <tr>
                                        <td> - SpringSecurity</td>
                                        <td>  - MySQL</td>
                                    </tr>
                                    <tr>
                                        <td> - Git</td>
                                        <td></td>
                                    </tr>
                                </table>

                                <h4><i class="fa-solid fa-pen-nib"></i> 배운점</h4>
                                <p>
                                    다수의 파일을 업로드하도록 만드는 파일 업로드 설정과 중복되지 않는 조회수 기록 기능을 구현하기 위한 공부를 했습니다.
                                    이외에도 테스트코드 작성을 시도해보았고 비밀번호 유효성검사를 위해 정규식을 익혔습니다.
                                </p>
                                <h4><i class="fa-brands fa-github"></i> 자세히 보기</h4>
                                <a href="https://github.com/subin9804/SpringBoard.git">Springboot board 레포지토리 바로가기</a>
                            </div>
                        </div>
                    </div>
               </div>
            </section>
    )
}