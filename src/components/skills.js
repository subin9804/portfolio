
export default function Skills() {

    return (
        <section id="skills">
            <h1>INTRO</h1>
            <div className="flex gap-4">
                <div className="w-1/2 h-full">
                    <div class="bg-white mb-5 p-4">
                        <p className="text-center text-xl font-bold pb-4">● SCHOOL ●</p>
                        <ul className="p-4">
                            <li>- 숭실대학교</li>
                            <li>- 2017.03 ~ 2023.02 (졸업)</li>
                            <li>- 정치외교학과, 글로벌통상학과</li>
                            <li>- 학점: 3.71 / 4.5</li>
                        </ul>
                    </div>
                    <div class="bg-green-100 p-4">
                        <p className="text-center text-xl font-bold pb-4">● EDU ●</p>
                        <dl>
                            <dt className="font-bold">2022.10 – 2023.05    코리아IT아카데미 </dt>
                            <dd className="pl-16">
                                <p className="pt-4">- 프론트엔드 개발자 과정 수료</p>
                                <p className="pl-4">Html, Css, Jacascript, React</p>
                                <p className="pt-4">- 웹개발 과정 수료</p>
                                <p className="pl-4 mb-2">Java, 자료구조, SQL, Servlet, Spring, Springboot</p>
                            </dd>
                        </dl>
                        <dl>
                            <dt className="font-bold pt-4">2023.08 – 2023.12   한국소프트웨어기술진흥협회</dt>
                            <dd className="pl-16 pt-4">
                                - Java기반 스프링 프레임워크 웹개발자 양성과정
                            </dd>
                        </dl>
                    
                    </div>
                </div>
                <div className="bg-yellow-100 p-4 w-1/2">
                    <p className="text-center text-xl font-bold pb-4">● SKILL ●</p>
                    <dl className="pb-4">
                        <dt className="font-bold">Front</dt>
                        <dd className="pl-16">
                            HTML5, CSS3, JavaSript(ES6)<br/>
                            Jquery, React.js, Next.js<br/>
                            TailwindCss, BootStrap
                        </dd>
                    </dl>
                    <dl className="pb-4">
                        <dt className="font-bold">Back</dt>
                        <dd className="pl-16">
                            Java, Spring, SpringBoot,<br/>
                            Thymeleaf, JSP, JPA,<br/>
                            RESTful API(JSON)
                        </dd>
                    </dl>
                    <dl className="pb-4">
                        <dt className="font-bold">DB</dt>
                        <dd className="pl-16">
                            MySQL, MongoDB
                        </dd>
                    </dl>
                    <dl className="pb-4">
                        <dt className="font-bold">Server</dt>
                        <dd className="pl-16">
                            Apache Tomcat, AWS EC2
                        </dd>
                    </dl>
                    <dl className="pb-4">
                        <dt className="font-bold">Tools</dt>
                        <dd className="pl-16">
                            eclipse(전자정부프레임워크), intelliJ, VScode
                        </dd>
                    </dl>
                    <dl>
                        <dt className="font-bold">Collaboration & design</dt>
                        <dd className="pl-16">
                            github, notion, google drive, pigma
                        </dd>
                    </dl>

                </div>
            </div>
        </section>
    )
}