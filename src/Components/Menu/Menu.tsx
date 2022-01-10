import {useState,useEffect} from 'react'
import './Menu.scss'
import Menuitems from './Menuitems'
import { connect } from 'react-redux';
import { changeActiveMenuIcon } from './../Redux/Actions';
function Menu(props:any) {
    const [toggle,setToggle] = useState(false)
  
    const togg = ()=>{
        setToggle(true)
    }
    const togg2 = ()=>{
        setToggle(false)
    }
    return (
        <div className="navflex">
            <div  onMouseOver={togg} className="navbar">
                <i className="eduicon">
                <svg width="74" height="42" viewBox="0 0 74 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.3192 24.336C37.8294 24.9023 36.186 24.9023 34.6962 24.336L22.3014 19.6523C22.2246 20.2646 22.1785 20.8768 22.1785 21.5044C22.1785 29.6472 28.829 36.2748 37 36.2748C45.171 36.2748 51.8215 29.6472 51.8215 21.5044C51.8215 20.8768 51.7754 20.2493 51.6987 19.6523L39.3192 24.336ZM45.3554 26.4023C45.3554 26.4023 45.4322 31.4687 37 31.5605C28.5679 31.484 28.6447 26.4023 28.6447 26.4023V23.035L34.1432 25.1779C35.971 25.8972 38.0137 25.8972 39.8415 25.1779L45.34 23.035V26.4023H45.3554Z" fill="white"/>
                <path d="M59.1631 12.3827C58.1955 12.3827 57.2586 12.4745 56.3524 12.6429C55.308 10.2398 53.8182 8.03571 51.8983 6.13775C47.9203 2.18878 42.6368 0 37 0C31.3632 0 26.0797 2.18878 22.1017 6.15306C20.1972 8.05102 18.692 10.2551 17.6476 12.6582C16.7414 12.4898 15.8045 12.398 14.8369 12.398C6.66583 12.3827 0 19.0255 0 27.1837C0 35.0663 6.22042 41.5255 14.0228 41.9694C14.2993 41.9847 14.5758 42 14.8522 42C15.1287 42 15.4051 41.9847 15.6816 41.9694H36.0016C36.3395 41.9847 36.6621 42 37 42C37.3379 42 37.6604 41.9847 37.9983 41.9694H58.3184C58.5948 41.9847 58.8713 42 59.1478 42C67.3341 42 74 35.3571 74 27.199C74.0153 19.0255 67.3495 12.3827 59.1631 12.3827ZM37 3.39796C45.0328 3.39796 51.8522 8.61735 54.2482 15.8265L49.6559 13.8061C47.0448 9.56633 42.3603 6.71939 37 6.71939C31.655 6.71939 26.9552 9.55102 24.3441 13.8061L19.7518 15.8265C22.1478 8.61735 28.9826 3.39796 37 3.39796ZM37 39.5969C26.9859 39.5969 18.8456 31.4847 18.8456 21.5051C18.8456 20.4643 18.9377 19.4388 19.1067 18.4439H19.0913L21.9174 17.2041H21.9327L34.3736 11.7245C36.0477 10.9898 37.9522 10.9898 39.6264 11.7245L52.0672 17.2041L54.8933 18.4439C55.0622 19.4388 55.1544 20.4643 55.1544 21.5051C55.1698 31.4847 47.0141 39.5969 37 39.5969Z" fill="white"/>
                </svg>
                </i>
                 <i onClick={()=>
                 {props.changeActiveMenuIcon({active:'qlhp',
                 subactive:'Danh sách lớp học'})}} 
                 className={props.active === 'qlhp'? "coin holyshiet":"coin"}>
                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7882 12.363H19.6367C19.9582 12.363 20.2665 12.2353 20.4938 12.008C20.7211 11.7806 20.8488 11.4723 20.8488 11.1509C20.8488 10.8294 20.7211 10.5211 20.4938 10.2938C20.2665 10.0664 19.9582 9.93874 19.6367 9.93874H17.2125V8.72662C17.2125 8.40515 17.0847 8.09684 16.8574 7.86952C16.6301 7.64221 16.3218 7.5145 16.0003 7.5145C15.6789 7.5145 15.3705 7.64221 15.1432 7.86952C14.9159 8.09684 14.7882 8.40515 14.7882 8.72662V9.93874C13.8238 9.93874 12.8989 10.3219 12.2169 11.0038C11.535 11.6858 11.1518 12.6107 11.1518 13.5751C11.1518 14.5395 11.535 15.4645 12.2169 16.1464C12.8989 16.8284 13.8238 17.2115 14.7882 17.2115H17.2125C17.5339 17.2115 17.8422 17.3392 18.0695 17.5665C18.2969 17.7938 18.4246 18.1021 18.4246 18.4236C18.4246 18.7451 18.2969 19.0534 18.0695 19.2807C17.8422 19.508 17.5339 19.6357 17.2125 19.6357H12.364C12.0425 19.6357 11.7342 19.7634 11.5069 19.9907C11.2796 20.218 11.1518 20.5264 11.1518 20.8478C11.1518 21.1693 11.2796 21.4776 11.5069 21.7049C11.7342 21.9322 12.0425 22.06 12.364 22.06H14.7882V23.2721C14.7882 23.5935 14.9159 23.9019 15.1432 24.1292C15.3705 24.3565 15.6789 24.4842 16.0003 24.4842C16.3218 24.4842 16.6301 24.3565 16.8574 24.1292C17.0847 23.9019 17.2125 23.5935 17.2125 23.2721V22.06C18.1769 22.06 19.1018 21.6768 19.7837 20.9949C20.4657 20.3129 20.8488 19.388 20.8488 18.4236C20.8488 17.4592 20.4657 16.5342 19.7837 15.8523C19.1018 15.1703 18.1769 14.7872 17.2125 14.7872H14.7882C14.4667 14.7872 14.1584 14.6595 13.9311 14.4322C13.7038 14.2049 13.5761 13.8966 13.5761 13.5751C13.5761 13.2536 13.7038 12.9453 13.9311 12.718C14.1584 12.4907 14.4667 12.363 14.7882 12.363ZM16.0003 2.66602C13.3632 2.66602 10.7854 3.448 8.59273 4.91309C6.40007 6.37817 4.69111 8.46055 3.68194 10.8969C2.67277 13.3332 2.40872 16.0141 2.92319 18.6006C3.43766 21.187 4.70754 23.5627 6.57224 25.4274C8.43694 27.2921 10.8127 28.562 13.3991 29.0765C15.9855 29.591 18.6664 29.3269 21.1028 28.3177C23.5391 27.3086 25.6215 25.5996 27.0866 23.4069C28.5517 21.2143 29.3337 18.6364 29.3337 15.9993C29.3337 12.4631 27.9289 9.07174 25.4284 6.57126C22.9279 4.07077 19.5365 2.66602 16.0003 2.66602ZM16.0003 26.9084C13.8427 26.9084 11.7336 26.2686 9.93956 25.0699C8.14557 23.8712 6.74733 22.1674 5.92165 20.1741C5.09596 18.1807 4.87993 15.9872 5.30086 13.8711C5.72178 11.7549 6.76077 9.81112 8.28644 8.28546C9.8121 6.75979 11.7559 5.7208 13.8721 5.29987C15.9882 4.87894 18.1817 5.09498 20.1751 5.92066C22.1684 6.74635 23.8722 8.14459 25.0709 9.93858C26.2696 11.7326 26.9094 13.8417 26.9094 15.9993C26.9094 18.8926 25.7601 21.6674 23.7142 23.7132C21.6684 25.7591 18.8936 26.9084 16.0003 26.9084Z" fill="white"/>
                </svg>
                 </i>

                <i onClick={()=>{props.changeActiveMenuIcon({active:'qll',
                subactive:'Danh sách giáo viên'})}} 
                className={props.active === 'qll'? "money-icon holyshiet":"money-icon"}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3933_18185)">
<path d="M28.8 6.66602H3.2C1.4352 6.66602 0 7.71252 0 8.99935V22.9993C0 24.2862 1.4352 25.3327 3.2 25.3327H28.8C30.5648 25.3327 32 24.2862 32 22.9993V8.99935C32 7.71252 30.5648 6.66602 28.8 6.66602ZM3.66667 22.9993C3.11438 22.9993 2.66667 22.5516 2.66667 21.9993V9.99935C2.66667 9.44706 3.11438 8.99935 3.66667 8.99935H28.3304C28.8826 8.99935 29.3302 9.44692 29.3304 9.99912L29.3331 21.9991C29.3332 22.5515 28.8855 22.9993 28.3331 22.9993H3.66667Z" fill="white"/>
<mask id="path-2-outside-1_3933_18185" maskUnits="userSpaceOnUse" x="12.1114" y="9" width="7" height="14" fill="black">
<rect fill="white" x="12.1114" y="9" width="7" height="14"/>
<path d="M17.0318 17.9638C17.0318 17.6546 16.9451 17.4094 16.7716 17.2284C16.6019 17.0436 16.3115 16.8739 15.9004 16.7193C15.4894 16.5646 15.1349 16.4119 14.8369 16.2611C14.539 16.1064 14.2825 15.9311 14.0676 15.7349C13.8564 15.5351 13.6904 15.3012 13.5697 15.0335C13.4528 14.7657 13.3944 14.447 13.3944 14.0774C13.3944 13.4401 13.598 12.9178 14.0053 12.5104C14.4126 12.1031 14.7893 11.8655 15.4644 11.7977V10.5C15.4644 10.2239 15.6883 10 15.9644 10H16.2103C16.4864 10 16.7103 10.2239 16.7103 10.5V11.8146C17.3778 11.9089 17.7239 12.188 18.101 12.6519C18.389 13.0032 18.567 13.4347 18.6351 13.9464C18.6715 14.2202 18.4429 14.4451 18.1667 14.4451H17.5318C17.2557 14.4451 17.0426 14.2183 16.9847 13.9483C16.9391 13.7361 16.8606 13.5642 16.749 13.4325C16.5642 13.2063 16.3153 13.0931 16.0023 13.0931C15.693 13.0931 15.4535 13.1817 15.2838 13.359C15.1141 13.5325 15.0293 13.7738 15.0293 14.0831C15.0293 14.3697 15.1122 14.5998 15.2782 14.7733C15.4441 14.9467 15.7515 15.124 16.2003 15.305C16.6528 15.486 17.0243 15.6576 17.3147 15.8198C17.6051 15.9782 17.8502 16.1592 18.0501 16.3629C18.25 16.5628 18.4027 16.7928 18.5083 17.053C18.6139 17.3095 18.6667 17.6093 18.6667 17.9525C18.6667 18.5936 18.4668 19.1141 18.0671 19.5138C17.6673 19.9136 17.4117 20.155 16.7103 20.2266V21.4977C16.7103 21.7748 16.485 21.999 16.208 21.9977L15.9621 21.9966C15.6869 21.9954 15.4644 21.7719 15.4644 21.4966V20.2266C14.6913 20.1437 14.143 19.8702 13.7168 19.4064C13.3895 19.0439 13.189 18.5898 13.1153 18.0439C13.0784 17.7702 13.3071 17.5452 13.5832 17.5452H14.2181C14.4943 17.5452 14.7072 17.7726 14.7705 18.0413C14.8215 18.2575 14.9096 18.4372 15.0349 18.5804C15.2499 18.818 15.5572 18.9368 15.957 18.9368C16.2889 18.9368 16.551 18.8501 16.7433 18.6766C16.9357 18.4993 17.0318 18.2618 17.0318 17.9638Z"/>
</mask>
<path d="M17.0318 17.9638C17.0318 17.6546 16.9451 17.4094 16.7716 17.2284C16.6019 17.0436 16.3115 16.8739 15.9004 16.7193C15.4894 16.5646 15.1349 16.4119 14.8369 16.2611C14.539 16.1064 14.2825 15.9311 14.0676 15.7349C13.8564 15.5351 13.6904 15.3012 13.5697 15.0335C13.4528 14.7657 13.3944 14.447 13.3944 14.0774C13.3944 13.4401 13.598 12.9178 14.0053 12.5104C14.4126 12.1031 14.7893 11.8655 15.4644 11.7977V10.5C15.4644 10.2239 15.6883 10 15.9644 10H16.2103C16.4864 10 16.7103 10.2239 16.7103 10.5V11.8146C17.3778 11.9089 17.7239 12.188 18.101 12.6519C18.389 13.0032 18.567 13.4347 18.6351 13.9464C18.6715 14.2202 18.4429 14.4451 18.1667 14.4451H17.5318C17.2557 14.4451 17.0426 14.2183 16.9847 13.9483C16.9391 13.7361 16.8606 13.5642 16.749 13.4325C16.5642 13.2063 16.3153 13.0931 16.0023 13.0931C15.693 13.0931 15.4535 13.1817 15.2838 13.359C15.1141 13.5325 15.0293 13.7738 15.0293 14.0831C15.0293 14.3697 15.1122 14.5998 15.2782 14.7733C15.4441 14.9467 15.7515 15.124 16.2003 15.305C16.6528 15.486 17.0243 15.6576 17.3147 15.8198C17.6051 15.9782 17.8502 16.1592 18.0501 16.3629C18.25 16.5628 18.4027 16.7928 18.5083 17.053C18.6139 17.3095 18.6667 17.6093 18.6667 17.9525C18.6667 18.5936 18.4668 19.1141 18.0671 19.5138C17.6673 19.9136 17.4117 20.155 16.7103 20.2266V21.4977C16.7103 21.7748 16.485 21.999 16.208 21.9977L15.9621 21.9966C15.6869 21.9954 15.4644 21.7719 15.4644 21.4966V20.2266C14.6913 20.1437 14.143 19.8702 13.7168 19.4064C13.3895 19.0439 13.189 18.5898 13.1153 18.0439C13.0784 17.7702 13.3071 17.5452 13.5832 17.5452H14.2181C14.4943 17.5452 14.7072 17.7726 14.7705 18.0413C14.8215 18.2575 14.9096 18.4372 15.0349 18.5804C15.2499 18.818 15.5572 18.9368 15.957 18.9368C16.2889 18.9368 16.551 18.8501 16.7433 18.6766C16.9357 18.4993 17.0318 18.2618 17.0318 17.9638Z" fill="white"/>
<path d="M16.7716 17.2284L16.6243 17.3637L16.6272 17.3668L16.7716 17.2284ZM14.8369 16.2611L14.7448 16.4386L14.7466 16.4395L14.8369 16.2611ZM14.0676 15.7349L13.9301 15.8802L13.9328 15.8827L14.0676 15.7349ZM13.5697 15.0335L13.3864 15.1135L13.3874 15.1157L13.5697 15.0335ZM15.4644 11.7977L15.4844 11.9967L15.6644 11.9786V11.7977H15.4644ZM16.7103 11.8146H16.5103V11.9884L16.6823 12.0127L16.7103 11.8146ZM18.101 12.6519L17.9458 12.778L17.9463 12.7787L18.101 12.6519ZM16.749 13.4325L16.5941 13.5591L16.5964 13.5618L16.749 13.4325ZM15.2838 13.359L15.4268 13.4989L15.4283 13.4973L15.2838 13.359ZM16.2003 15.305L16.1254 15.4905L16.126 15.4907L16.2003 15.305ZM17.3147 15.8198L17.2172 15.9944L17.2189 15.9954L17.3147 15.8198ZM18.0501 16.3629L17.9074 16.503L17.9087 16.5043L18.0501 16.3629ZM18.5083 17.053L18.323 17.1282L18.3234 17.1292L18.5083 17.053ZM16.7103 20.2266L16.6899 20.0277L16.5103 20.046V20.2266H16.7103ZM15.4644 20.2266H15.6644V20.0469L15.4857 20.0278L15.4644 20.2266ZM13.7168 19.4064L13.5684 19.5404L13.5695 19.5417L13.7168 19.4064ZM15.0349 18.5804L14.8844 18.7122L14.8866 18.7146L15.0349 18.5804ZM16.7433 18.6766L16.8773 18.8251L16.8789 18.8237L16.7433 18.6766ZM15.9621 21.9966L15.963 21.7966L15.9621 21.9966ZM16.208 21.9977L16.2071 22.1977L16.208 21.9977ZM18.6351 13.9464L18.8333 13.92L18.6351 13.9464ZM14.7705 18.0413L14.5759 18.0872L14.7705 18.0413ZM17.2318 17.9638C17.2318 17.6157 17.1331 17.3165 16.916 17.09L16.6272 17.3668C16.7571 17.5023 16.8318 17.6934 16.8318 17.9638H17.2318ZM16.9189 17.0931C16.7176 16.8739 16.3923 16.6906 15.9709 16.5321L15.83 16.9065C16.2307 17.0572 16.4862 17.2133 16.6243 17.3637L16.9189 17.0931ZM15.9709 16.5321C15.5646 16.3793 15.2171 16.2294 14.9273 16.0826L14.7466 16.4395C15.0526 16.5945 15.4141 16.75 15.83 16.9065L15.9709 16.5321ZM14.929 16.0835C14.6443 15.9357 14.4027 15.7699 14.2024 15.5872L13.9328 15.8827C14.1624 16.0922 14.4337 16.2771 14.7448 16.4386L14.929 16.0835ZM14.205 15.5897C14.013 15.4079 13.8622 15.1956 13.7521 14.9513L13.3874 15.1157C13.5187 15.4069 13.6998 15.6622 13.9301 15.8802L14.205 15.5897ZM13.753 14.9534C13.6496 14.7167 13.5944 14.4265 13.5944 14.0774H13.1944C13.1944 14.4675 13.256 14.8148 13.3865 15.1135L13.753 14.9534ZM13.5944 14.0774C13.5944 13.4869 13.7811 13.0175 14.1468 12.6519L13.8639 12.369C13.4149 12.818 13.1944 13.3932 13.1944 14.0774H13.5944ZM14.1468 12.6519C14.3426 12.456 14.522 12.3102 14.7264 12.2044C14.9297 12.0991 15.1674 12.0285 15.4844 11.9967L15.4444 11.5987C15.0864 11.6347 14.7982 11.7168 14.5425 11.8492C14.2879 11.981 14.0754 12.1575 13.8639 12.369L14.1468 12.6519ZM15.6644 11.7977V10.5H15.2644V11.7977H15.6644ZM15.9644 10.2H16.2103V9.8H15.9644V10.2ZM16.5103 10.5V11.8146H16.9103V10.5H16.5103ZM16.6823 12.0127C16.9921 12.0564 17.2172 12.1413 17.4064 12.2629C17.5978 12.3859 17.7631 12.5532 17.9458 12.778L18.2562 12.5257C18.0619 12.2867 17.8655 12.0825 17.6227 11.9264C17.3777 11.7689 17.096 11.6671 16.7382 11.6166L16.6823 12.0127ZM17.9463 12.7787C18.2076 13.0974 18.3729 13.4928 18.4368 13.9728L18.8333 13.92C18.761 13.3766 18.5703 12.9089 18.2557 12.5251L17.9463 12.7787ZM18.1667 14.2451H17.5318V14.6451H18.1667V14.2451ZM17.1802 13.9063C17.1295 13.67 17.0392 13.4657 16.9016 13.3032L16.5964 13.5618C16.6819 13.6627 16.7487 13.8022 16.7891 13.9903L17.1802 13.9063ZM16.9039 13.306C16.6781 13.0296 16.3704 12.8931 16.0023 12.8931V13.2931C16.2601 13.2931 16.4503 13.383 16.5941 13.559L16.9039 13.306ZM16.0023 12.8931C15.6535 12.8931 15.3561 12.9943 15.1394 13.2207L15.4283 13.4973C15.551 13.3692 15.7325 13.2931 16.0023 13.2931V12.8931ZM15.1409 13.2191C14.9253 13.4395 14.8293 13.7366 14.8293 14.0831H15.2293C15.2293 13.8111 15.3029 13.6255 15.4268 13.4989L15.1409 13.2191ZM14.8293 14.0831C14.8293 14.4106 14.9254 14.6938 15.1336 14.9115L15.4227 14.635C15.2991 14.5058 15.2293 14.3289 15.2293 14.0831H14.8293ZM15.1336 14.9115C15.3305 15.1174 15.6717 15.3075 16.1254 15.4905L16.2751 15.1195C15.8312 14.9405 15.5577 14.7761 15.4227 14.635L15.1336 14.9115ZM16.126 15.4907C16.5739 15.6699 16.9369 15.8379 17.2172 15.9944L17.4122 15.6452C17.1117 15.4774 16.7318 15.3022 16.2745 15.1193L16.126 15.4907ZM17.2189 15.9954C17.4947 16.1458 17.7233 16.3154 17.9074 16.503L18.1928 16.2228C17.9771 16.003 17.7155 15.8106 17.4105 15.6442L17.2189 15.9954ZM17.9087 16.5043C18.0898 16.6854 18.2275 16.893 18.323 17.1282L18.6937 16.9778C18.5779 16.6927 18.4102 16.4401 18.1915 16.2215L17.9087 16.5043ZM18.3234 17.1292C18.417 17.3565 18.4667 17.6294 18.4667 17.9525H18.8667C18.8667 17.5892 18.8109 17.2625 18.6933 16.9769L18.3234 17.1292ZM18.4667 17.9525C18.4667 18.5483 18.2828 19.0153 17.9257 19.3724L18.2085 19.6553C18.6509 19.2129 18.8667 18.6389 18.8667 17.9525H18.4667ZM17.9257 19.3724C17.7234 19.5746 17.5765 19.7167 17.4 19.8212C17.2288 19.9225 17.0189 19.9941 16.6899 20.0277L16.7306 20.4256C17.1031 20.3875 17.3718 20.3026 17.6037 20.1654C17.8303 20.0313 18.011 19.8528 18.2085 19.6553L17.9257 19.3724ZM16.5103 20.2266V21.4977H16.9103V20.2266H16.5103ZM16.2089 21.7977L15.963 21.7966L15.9612 22.1966L16.2071 22.1977L16.2089 21.7977ZM15.6644 21.4966V20.2266H15.2644V21.4966H15.6644ZM15.4857 20.0278C14.7543 19.9493 14.2531 19.6945 13.8641 19.2711L13.5695 19.5417C14.0328 20.0459 14.6283 20.338 15.4431 20.4255L15.4857 20.0278ZM13.8652 19.2723C13.5683 18.9435 13.3825 18.5284 13.3135 18.0171L12.9171 18.0706C12.9954 18.6512 13.2106 19.1443 13.5684 19.5404L13.8652 19.2723ZM13.5832 17.7452H14.2181V17.3452H13.5832V17.7452ZM14.5759 18.0872C14.6331 18.3299 14.7343 18.5405 14.8844 18.7121L15.1854 18.4487C15.085 18.3339 15.0099 18.1852 14.9652 17.9955L14.5759 18.0872ZM14.8866 18.7146C15.1485 19.0041 15.5158 19.1368 15.957 19.1368V18.7368C15.5987 18.7368 15.3512 18.632 15.1832 18.4462L14.8866 18.7146ZM15.957 19.1368C16.324 19.1368 16.6388 19.0402 16.8773 18.8251L16.6094 18.5281C16.4632 18.6599 16.2538 18.7368 15.957 18.7368V19.1368ZM16.8789 18.8237C17.1182 18.6031 17.2318 18.3091 17.2318 17.9638H16.8318C16.8318 18.2144 16.7531 18.3956 16.6078 18.5295L16.8789 18.8237ZM15.963 21.7966C15.7979 21.7959 15.6644 21.6618 15.6644 21.4966H15.2644C15.2644 21.882 15.5759 22.1949 15.9612 22.1966L15.963 21.7966ZM16.5103 21.4977C16.5103 21.6639 16.3751 21.7985 16.2089 21.7977L16.2071 22.1977C16.5949 22.1995 16.9103 21.8856 16.9103 21.4977H16.5103ZM18.4368 13.9728C18.4548 14.1081 18.3415 14.2451 18.1667 14.2451V14.6451C18.5443 14.6451 18.8882 14.3323 18.8333 13.92L18.4368 13.9728ZM14.2181 17.7452C14.3734 17.7452 14.5266 17.8782 14.5759 18.0872L14.9652 17.9955C14.8878 17.667 14.6152 17.3452 14.2181 17.3452V17.7452ZM16.2103 10.2C16.376 10.2 16.5103 10.3343 16.5103 10.5H16.9103C16.9103 10.1134 16.5969 9.8 16.2103 9.8V10.2ZM17.5318 14.2451C17.3764 14.2451 17.2245 14.1127 17.1802 13.9063L16.7891 13.9903C16.8608 14.3239 17.135 14.6451 17.5318 14.6451V14.2451ZM13.3135 18.0171C13.2953 17.8823 13.4083 17.7452 13.5832 17.7452V17.3452C13.2059 17.3452 12.8615 17.6581 12.9171 18.0706L13.3135 18.0171ZM15.6644 10.5C15.6644 10.3343 15.7987 10.2 15.9644 10.2V9.8C15.5778 9.8 15.2644 10.1134 15.2644 10.5H15.6644Z" fill="white" mask="url(#path-2-outside-1_3933_18185)"/>
<path d="M7.12532 6.66602C7.60839 6.66602 8.00494 7.05877 7.95223 7.53896C7.8698 8.28989 7.68125 9.02684 7.39104 9.72748C6.989 10.6981 6.39972 11.58 5.65685 12.3229C4.91399 13.0657 4.03207 13.655 3.06147 14.0571C2.36082 14.3473 1.62387 14.5358 0.872946 14.6182C0.392757 14.671 -4.76837e-07 14.2744 -4.76837e-07 13.7913C-4.76837e-07 13.3083 0.393485 12.9229 0.871837 12.8556C1.39288 12.7822 1.90373 12.6431 2.39202 12.4409C3.15038 12.1267 3.83944 11.6663 4.41987 11.0859C5.00029 10.5055 5.46071 9.81639 5.77484 9.05803C5.97709 8.56975 6.11614 8.05889 6.18954 7.53785C6.25692 7.0595 6.64225 6.66602 7.12532 6.66602Z" fill="white"/>
<path d="M-1.13799e-06 18.2087C-1.1591e-06 17.7256 0.392757 17.329 0.872945 17.3818C1.62387 17.4642 2.36082 17.6527 3.06147 17.9429C4.03207 18.345 4.91398 18.9343 5.65685 19.6771C6.39972 20.42 6.989 21.3019 7.39103 22.2725C7.68125 22.9732 7.8698 23.7101 7.95223 24.461C8.00494 24.9412 7.60839 25.334 7.12532 25.334C6.64224 25.334 6.25691 24.9405 6.18954 24.4621C6.11614 23.9411 5.97709 23.4303 5.77483 22.942C5.46071 22.1836 5.00029 21.4945 4.41987 20.9141C3.83944 20.3337 3.15038 19.8733 2.39201 19.5591C1.90373 19.3569 1.39287 19.2178 0.871835 19.1444C0.393484 19.0771 -1.11687e-06 18.6917 -1.13799e-06 18.2087Z" fill="white"/>
<path d="M24.8747 25.334C24.3916 25.334 23.9951 24.9412 24.0478 24.461C24.1302 23.7101 24.3187 22.9732 24.609 22.2725C25.011 21.3019 25.6003 20.42 26.3431 19.6771C27.086 18.9343 27.9679 18.345 28.9385 17.9429C29.6392 17.6527 30.3761 17.4642 31.1271 17.3818C31.6072 17.329 32 17.7256 32 18.2087C32 18.6917 31.6065 19.0771 31.1282 19.1444C30.6071 19.2178 30.0963 19.3569 29.608 19.5591C28.8496 19.8733 28.1606 20.3337 27.5801 20.9141C26.9997 21.4945 26.5393 22.1836 26.2252 22.942C26.0229 23.4303 25.8839 23.9411 25.8105 24.4621C25.7431 24.9405 25.3578 25.334 24.8747 25.334Z" fill="white"/>
<path d="M32 13.7913C32 14.2744 31.6072 14.671 31.1271 14.6182C30.3761 14.5358 29.6392 14.3473 28.9385 14.0571C27.9679 13.655 27.086 13.0657 26.3431 12.3229C25.6003 11.58 25.011 10.6981 24.609 9.72748C24.3187 9.02684 24.1302 8.28989 24.0478 7.53896C23.9951 7.05877 24.3916 6.66602 24.8747 6.66602C25.3578 6.66602 25.7431 7.0595 25.8105 7.53785C25.8839 8.05889 26.0229 8.56975 26.2252 9.05803C26.5393 9.81639 26.9997 10.5055 27.5801 11.0859C28.1606 11.6663 28.8496 12.1267 29.608 12.4409C30.0963 12.6431 30.6071 12.7822 31.1282 12.8556C31.6065 12.9229 32 13.3083 32 13.7913Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_3933_18185">
<rect width="32" height="32" fill="white"/>
</clipPath>
</defs>
                </svg>
                </i>

                <i onClick={()=>{props.changeActiveMenuIcon({active:'dxvpd'})}} 
                className={props.active === 'dxvpd'? "foldercheck holyshiet":"foldercheck"}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.0537 14.3873L14.667 18.7873L12.947 17.054C12.6959 16.8029 12.3554 16.6619 12.0003 16.6619C11.6453 16.6619 11.3047 16.8029 11.0537 17.054C10.8026 17.3051 10.6615 17.6456 10.6615 18.0007C10.6615 18.3557 10.8026 18.6963 11.0537 18.9473L13.7203 21.614C13.8443 21.739 13.9917 21.8382 14.1542 21.9059C14.3167 21.9736 14.491 22.0084 14.667 22.0084C14.843 22.0084 15.0173 21.9736 15.1798 21.9059C15.3422 21.8382 15.4897 21.739 15.6137 21.614L20.947 16.2807C21.1981 16.0296 21.3391 15.6891 21.3391 15.334C21.3391 14.9789 21.1981 14.6384 20.947 14.3873C20.6959 14.1363 20.3554 13.9952 20.0003 13.9952C19.6453 13.9952 19.3047 14.1363 19.0537 14.3873ZM25.3337 7.33401H16.9603L16.5337 6.00068C16.2571 5.21832 15.744 4.54135 15.0655 4.06356C14.3871 3.58577 13.5768 3.33082 12.747 3.33401H6.66699C5.60613 3.33401 4.58871 3.75544 3.83857 4.50559C3.08842 5.25573 2.66699 6.27315 2.66699 7.33401V24.6673C2.66699 25.7282 3.08842 26.7456 3.83857 27.4958C4.58871 28.2459 5.60613 28.6673 6.66699 28.6673H25.3337C26.3945 28.6673 27.4119 28.2459 28.1621 27.4958C28.9122 26.7456 29.3337 25.7282 29.3337 24.6673V11.334C29.3337 10.2731 28.9122 9.25573 28.1621 8.50559C27.4119 7.75544 26.3945 7.33401 25.3337 7.33401ZM26.667 24.6673C26.667 25.021 26.5265 25.3601 26.2765 25.6102C26.0264 25.8602 25.6873 26.0007 25.3337 26.0007H6.66699C6.31337 26.0007 5.97423 25.8602 5.72418 25.6102C5.47413 25.3601 5.33366 25.021 5.33366 24.6673V7.33401C5.33366 6.98039 5.47413 6.64125 5.72418 6.39121C5.97423 6.14116 6.31337 6.00068 6.66699 6.00068H12.747C13.0265 5.99996 13.2992 6.08711 13.5265 6.2498C13.7538 6.4125 13.9242 6.64252 14.0137 6.90735L14.7337 9.09401C14.8231 9.35884 14.9935 9.58886 15.2208 9.75156C15.4481 9.91426 15.7208 10.0014 16.0003 10.0007H25.3337C25.6873 10.0007 26.0264 10.1412 26.2765 10.3912C26.5265 10.6413 26.667 10.9804 26.667 11.334V24.6673Z" fill="white"/>
                </svg>
                </i>
            </div>
            {toggle && <div onMouseLeave={togg2}><Menuitems /></div>}
        </div>
    )
}
const mapState = (state:any)=>{
    return{
        active: state.active
    }
}
const mapDispatch = (dispatch:any)=>{
    return{
        changeActiveMenuIcon: (e:any)=>{dispatch(changeActiveMenuIcon(e))}
    }
}
export default connect(mapState,mapDispatch)(Menu)
