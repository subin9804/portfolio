export default function Intro() {

    return (
        <div className="flex text-white justify-between mb-20 max-[1090px]:block">
            <div className="">
                <img src="\img\photo.png" style={{height: "450px"}}/>
            </div>
            <div className="">
                <div className="text-right text-2xl font-bold">
                    <span className="border-b-4 border-dashed pt-4 whitespace-nowrap"><span className="text-orange-500">열정</span>적으로 배우고 <span className="text-orange-500">도전</span>하는 개발자, 이수빈 입니다.</span><br/>
                    <p className="border-b-4 border-dashed pt-4 whitespace-nowrap"><span className="text-orange-500">성실함</span>과 <span className="text-orange-500">책임감</span>으로 누구보다 <span className="text-orange-500">끈기 있는 태도</span>를 자신합니다.</p>
                </div>
                <table className="pt-20 block text-lg float-right max-[1090px]:float-none">
                    <tr className="block py-2 border-b-2 border-green-900">
                        <th className="w-60">이름</th> <td className="w-96">이수빈</td>
                    </tr>
                    <tr className="block py-2 border-b-2 border-green-900">
                        <th className="w-60">생년월일</th> <td>1998.04.29</td>
                    </tr>
                    <tr className="block py-2 border-b-2 border-green-900">
                        <th className="w-60">이메일</th> <td>subin9804@naver.com</td>
                    </tr>
                    <tr className="block py-2 border-b-2 border-green-900">
                        <th className="w-60">전화번호</th> <td>010-9878-9359</td>
                    </tr>
                    <tr className="block py-2 border-b-2 border-green-900">
                        <th className="w-60">Blog</th> <td> https://oolilyoo.tistory.com</td>
                    </tr>
                    <tr className="block py-2">
                        <th className="w-60">Github</th> <td>https://github.com/subin9804</td>
                    </tr>
                </table>
            </div>
        </div>
    ) 
}