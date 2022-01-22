import React from "react";
import welcomeImg from '../components/img/zhensuojianjiegb.gif';

const chineseMainPage = () => {
  return (
    <div > <img src={welcomeImg}></img>
      <p className="pageBody"> 王医生在中国出生，香港长大，1985年毕业于东方大学牙医学院，1986年服务于台北和安牙科诊 所。1987年前来美国深造，在世界著名的Dr. Melvin Lund 指导下学习牙科补缀学， Dr. Ralph Phillips 名下学习牙科材料学和Dr. Arden Christen名下学习牙科预防 术，1990年考取牙科硕士，1991年并获牙科博士学位和取得美国印第安那州牙医执 业证书。1991年任职印城退伍军人医院住院牙医师。1992年至1996年服务于 Kokomo Ladd Dental Group。1995年起自己开业 。2013年起兼任印第安那大学牙医学院临床教授。</p>
      <h2 className="pageHeader">新冠病毒防范：</h2>
      <p className="pageBody">我们有充足的个人防护装备和空气净化机。</p>
      <p className="pageBody"> <strong>王医生会国，粤，台语，提供下列各项家庭牙医服务(包括小孩)：</strong> </p>
      <ul className="pageList">
        <li> 常规检查，洗牙，口臭治疗，敏感治疗，补牙，镶假牙， 植牙等等。</li>
        <li> 诊治牙齿病痛，牙周病治疗，根管治疗，拔牙 (包括智齿)。</li>
        <li> 牙齿美容(漂白，不磨损牙贴面，白色补牙材料，白色牙套，齿列矫正)。</li>

      </ul>

      <h2 className="pageHeader">医务所服务时间:</h2>

      <p>星期一，二，四	 	上午8：30 至 下午5：30 <br></br>
        星期三	 	下午1：00 至 晚上7：00 <br></br>
        星期五	 	上午9：00 至 下午1：00 (每月第二，第四周) <br></br>
        星期六	 	上午9：00 至 下午1：00 (每月第一，第三周)
      </p>
      <h2 className="pageHeader">地址﹕</h2>
      <p className="pageBody"> Methodist Medical Plaza I, Eagle Highland <br></br>
        6920 Parkdale Place, Suite 217, Indianapolis, IN 46254<br></br>
        西38街和465交界 (465高速公路17号出口)，即Target 对面 地图</p>
      <h2 className="pageHeader"> 欢迎预约</h2>
      <p className="pageBody"> 电话/短讯：	(317) 328-6708 (说中文请找李玲) <br></br>
        传真：	(317) 328-6888 <br></br>
        邮件：	contactus@dentistwong.com
        网上预约：	按此填表</p>
    </div>

  )
}

export default chineseMainPage;