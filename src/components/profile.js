
export default function Profile() {

    return (
        <section id="profile">
            <h1>PROFILE</h1>
            <div className="wrapper border">
                <div className="keyword">
                    <h2>[ Keyword for Introduce ]</h2>
                    <dl className="">
                        <dd>한 걸음씩 꾸준히 나아가기 위해 학습과 기록을 습관화 하였습니다.</dd>
                    </dl>
                    <dl>
                        <dd>새로운 분야에 대하여 거부감을 느끼기보다는 호기심과 도전의식으로 받아들입니다.</dd>
                    </dl>
                    <dl>
                        <dd>마음가짐에 따라 주어진 상황을 해석하기에 긍정적인 태도를 갖추기 위해 노력합니다.</dd>
                    </dl>
                    <dl>
                        <dd>정치와 무역을 전공하며 세상에 대한 넓은 식견을 익힐 수 있었으며 비단 하나의 시각에 얽매이지 않고 자유롭게 사고할 수 있는 능력을 함양했습니다.</dd>
                    </dl>
                    <dl>
                        <dd>여행과 봉사활동, 교환학생, 아르바이트 등을 통해 다양한 사람들과 함께하며 교훈을 얻고 성장하였습니다. 이는 앞으로 개발자로서의 삶에 풍부한 양분이 될 것입니다.</dd>
                    </dl>
                </div>
                <div className="edu">
                    <h2>[ Education ]</h2>
                    <div className="edu-list">

                        <div className="education">
                            <h4>소사고등학교</h4>
                            <p className="date">2014.03 ~ 2017.02</p>
                            
                        </div>
                        <div className="education">
                            <h4>숭실대학교</h4>
                            <p className="date">2017.03 ~ 2023.02</p>
                            <p>정치외교학 전공</p>
                            <p>글로벌통상학 복수전공</p>
                            <br />
                            <p>캄보디아 교육봉사활동</p>
                            <p className="date">2018.09 ~ 2018.12</p>
                            <br />
                            <br />
                            <p>체코 교환학생</p>
                            <p className="date">2020.02 ~ 2020.06</p>
                        </div>
                        <div className="education">
                            <h4>코리아IT 아카데미</h4>
                            <p className="date">2022.10 ~ 2023.05</p>
                            <hr />
                            <h5>- Java 단과 과정 수강</h5> <p>언어와 기초적인 자료구조, CS개념을 익혔습니다.</p>
                            <h5>- 웹개발 과정 수강</h5> <p> spring, springboot 프레임워크를 이용한 웹개발과정을 수강하며 SQL, TDD, git와 같은 웹개발에 필요한 개념들을 익힐 수 있었습니다.</p>
                            <h5>- 프론트엔드 과정 수강</h5> <p>HTML, CSS, JavaScript 활용법을 익혔으며 JavaScript를 기반으로 React.js를 활용한 웹개발을 배우고 실습했습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}