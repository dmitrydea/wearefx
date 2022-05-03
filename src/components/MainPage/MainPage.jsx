import React, { useEffect, useState, useRef } from 'react'
import { Cases } from '../Cases/Cases'
import { Hire } from '../Hire/Hire'
import { MainPageButton } from '../MainPageButton/MainPageButton'
import { Story } from '../Story/Story'
import TypingText from '../TypingText/TypingText'
import { Link } from 'react-router-dom'
import './MainPage.css'
import './MainPageMedia.css'

import videoPower from './video/videoPower.webm'

const applyLayout = (canvas) => {
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight
}

const MainPage = ({
    is1BtnHovered,
    is2BtnHovered,
    is3BtnHovered,
    setIs3BtnHovered,
    setIs2BtnHovered,
    setIs1BtnHovered,
}) => {
    const casesArray = [
        {
            title: "McDonald<span class='schar__'>'</span>s",
            id: 1,
            className: 'mcDonalds',
            background: 'mcBack',
        },
        {
            title: 'Puma',
            id: 2,
            className: 'puma',
            background: 'pBack',
        },
        {
            title: 'Flint',
            id: 3,
            className: 'mcDonalds',
            background: 'fBack',
        },
        {
            title: 'Little big',
            id: 4,
            className: 'mcDonalds',
            background: 'lBack',
        },
        {
            title: 'Parimatch',
            id: 5,
            className: 'mcDonalds',
            background: 'pBack',
            // pmBack
        },
        {
            title: 'Navi',
            id: 6,
            className: 'mcDonalds',
            background: 'nBack',
        },
    ]

    const [buttonsCoords, setButtonsCoords] = useState([])
    const intervalRef = useRef(null)
    const btn1Ref = useRef(null)
    const btn2Ref = useRef(null)
    const btn3Ref = useRef(null)

    const canvas1 = document.getElementById('overlay1')
    const canvas2 = document.getElementById('overlay2')
    const canvas3 = document.getElementById('overlay3')

    const ctx_lar_1 = document.getElementById("lineanimationrightfirst")
    const ctx_lar_2 = document.getElementById("lineanimationrightsecond")
    const ctx_lal_1 = document.getElementById("lineanimationleftfirst")
    const ctx_lal_2 = document.getElementById("lineanimationleftsecond")

    const ctx_lar_1_story = document.getElementById("lineanimationrightfirst_story")
    const ctx_lar_2_story = document.getElementById("lineanimationrightsecond_story")
    const ctx_lal_1_story = document.getElementById("lineanimationleftfirst_story")
    const ctx_lal_2_story = document.getElementById("lineanimationleftsecond_story")

    const ctx_lar_1_hire = document.getElementById("lineanimationrightfirst_hire")
    const ctx_lar_2_hire = document.getElementById("lineanimationrightsecond_hire")
    const ctx_lal_1_hire = document.getElementById("lineanimationleftfirst_hire")
    const ctx_lal_2_hire = document.getElementById("lineanimationleftsecond_hire")

    const btn1_moved = document.getElementById("cases_movedHoveredButton")
    const btn2_moved = document.getElementById("story_movedHoveredButton")
    const btn3_moved = document.getElementById("hireus_movedHoveredButton")

    const polyline = document.getElementById('polyline')
    const polyline1 = document.getElementById('polyline1')
    const polyline2 = document.getElementById('polyline2')

    const [changePositionLine, setChangePositionLine] = useState(0)

    const [dAttributeRightOne, setAttributeRightOne] = useState(null)
    const [dAttributeRightTwo, setAttributeRightTwo] = useState(null)
    const [dAttributeLeftOne, setAttributeLeftOne] = useState(null)
    const [dAttributeLeftTwo, setAttributeLeftTwo] = useState(null)

    const [dAttributeRightOneStory, setAttributeRightOneStory] = useState(null)
    const [dAttributeRightTwoStory, setAttributeRightTwoStory] = useState(null)
    const [dAttributeLeftOneStory, setAttributeLeftOneStory] = useState(null)
    const [dAttributeLeftTwoStory, setAttributeLeftTwoStory] = useState(null)

    const [dAttributeRightOneHire, setAttributeRightOneHire] = useState(null)
    const [dAttributeRightTwoHire, setAttributeRightTwoHire] = useState(null)
    const [dAttributeLeftOneHire, setAttributeLeftOneHire] = useState(null)
    const [dAttributeLeftTwoHire, setAttributeLeftTwoHire] = useState(null)

    const [isCasesArrayHover, setIsCasesArrayHover] = useState(false)
    const [isMouseMove, setIsMouseMove] = useState(false)

    const [isCasesClicked, setIsCasesClicked] = useState(false)
    const [isCasesEntered, setIsCasesEntered] = useState(false)

    const [isStoryClicked, setIsStoryClicked] = useState(false)
    const [isStoryEntered, setIsStoryEntered] = useState(false)

    const [isHireClicked, setIsHireClicked] = useState(false)
    const [isHireEntered, setIsHireEntered] = useState(false)

    const [isCanvasesHidded, setIsCanvasesHidded] = useState(false)

    const PlaceCursor = document.getElementsByClassName('movable')[0]

    const on1BtnEnter = () => {
        setIs1BtnHovered(true)
        setIsCasesEntered(true)
        canvas1.classList.add('displayNone')
    }
    const on1BtnLeave = () => {
        setIs1BtnHovered(false)
        setIsCasesEntered(false)
        canvas1.classList.remove('displayNone')
    }
    const on2BtnEnter = () => {
        setIsStoryEntered(true)
        canvas2.classList.add('displayNone')
        setIs2BtnHovered(true)
    }
    const on2BtnLeave = () => {
        setIsStoryEntered(false)
        canvas2.classList.remove('displayNone')
        setIs2BtnHovered(false)
    }
    const on3BtnEnter = () => {
        setIsHireEntered(true)
        canvas3.classList.add('displayNone')
        setIs3BtnHovered(true)
    }
    const on3BtnLeave = () => {
        setIsHireEntered(false)
        canvas3.classList.remove('displayNone')
        setIs3BtnHovered(false)
    }
    const joinPoints = (ctx, from, to) => {
        const stroke = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
        if (isCasesEntered || isStoryEntered || isHireEntered) {
            stroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
            stroke.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(0.6, 'rgba(255, 255, 255, 0.9)')
            stroke.addColorStop(0.9, 'rgba(255, 255, 255, 0.02)')
        } else {
            stroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
            stroke.addColorStop(0.4, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(0.5, 'white')
            stroke.addColorStop(0.9, 'rgba(255, 255, 255, 0.2)')
            stroke.addColorStop(1, 'rgba(255, 255, 255, 0)')
        }
        ctx.strokeStyle = stroke
        ctx.lineWidth = 1

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)

        if (isCasesEntered) ctx.lineTo(to.x + 4, to.y - 5)
        if (isStoryEntered) ctx.lineTo(to.x - 50, to.y + 25)
        if (isHireEntered) ctx.lineTo(to.x + 50, to.y + 25)
        else ctx.lineTo(to.x, to.y)
        ctx.stroke()
    }
    function drawAnimLine(canvas, mouseCoords, elementCoords) {
        const ctx = canvas.getContext('2d')
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            const x1 = elementCoords.x - window.scrollX
            const y1 = elementCoords.y - window.scrollY
            joinPoints(ctx, { x: x1, y: y1 }, mouseCoords)
        }
        requestAnimationFrame(draw)
    }

    const btnMove1 = (e) => {
        
        if (!buttonsCoords.length) return
        if (
            (Math.abs(buttonsCoords[0].y - e.clientY) < 130 &&
                Math.abs(buttonsCoords[0].x - e.clientX) < 130) ||
            (Math.abs(buttonsCoords[1].y - e.clientY) < 130 &&
                Math.abs(buttonsCoords[1].x - e.clientX) < 130) ||
            (Math.abs(buttonsCoords[2].y - e.clientY) < 130 &&
                Math.abs(buttonsCoords[2].x - e.clientX) < 130)
        ) {
            alert("b1");
            PlaceCursor.style.transform = 'scale(2.5) translate(-20%, -10%)';
        } else if (
            (Math.abs(buttonsCoords[0].y - e.clientY) < 200 &&
                Math.abs(buttonsCoords[0].x - e.clientX) < 200) ||
            (Math.abs(buttonsCoords[1].y - e.clientY) < 200 &&
                Math.abs(buttonsCoords[1].x - e.clientX) < 200) ||
            (Math.abs(buttonsCoords[2].y - e.clientY) < 200 &&
                Math.abs(buttonsCoords[2].x - e.clientX) < 200)
        ) {
            alert("b2");
            PlaceCursor.style.transform = 'scale(1.7) translate(-30%, -20%)';
        } else {
            alert("b3");
            PlaceCursor.style.transition = 'background 0.5s ease-in-out'
            PlaceCursor.style.transform = 'scale(1) translate(-50%, -40%)'
        }
    }

    const onMove = (e) => {
        console.log("a");
        if(is1BtnHovered && !isCasesClicked) {
            btn1_moved.style = "left:" + e.clientX + "px !important;top:" + e.clientY + "px !important;";
        } else {
            btn1_moved.style = "";
        }
        if(is2BtnHovered && !isStoryClicked) {
            btn2_moved.style = "left:" + e.clientX + "px !important;top:" + e.clientY + "px !important;";
        } else {
            btn2_moved.style = "";
        }
        if(is3BtnHovered && !isHireClicked) {
            btn3_moved.style = "left:" + e.clientX + "px !important;top:" + e.clientY + "px !important;";
        } else {
            btn3_moved.style = "";
        }
        if (isCasesClicked && !isMouseMove) {
            setIsMouseMove(true);
            redrawLines("cases");
            setTimeout(function() {
                setIsMouseMove(false);
            },500);
        }
        if (isStoryClicked && !isMouseMove) {
            setIsMouseMove(true);
            redrawLines("story");
            setTimeout(function() {
                setIsMouseMove(false);
            },500);
        }
        if (isHireClicked && !isMouseMove) {
            setIsMouseMove(true);
            redrawLines("hire");
            setTimeout(function() {
                setIsMouseMove(false);
            },500);
        }
        if (!buttonsCoords.length) return
        drawAnimLine(canvas1, { x: e.clientX, y: e.clientY }, buttonsCoords[0])
        drawAnimLine(canvas2, { x: e.clientX, y: e.clientY }, buttonsCoords[1])
        drawAnimLine(canvas3, { x: e.clientX, y: e.clientY }, buttonsCoords[2])        
    }

    const resizeEvent = (e) => {
        var b1 = btn1Ref.current?.getBoundingClientRect();
        var b2 = btn2Ref.current?.getBoundingClientRect();
        var b3 = btn3Ref.current?.getBoundingClientRect();
        try {
            //if (isCasesEntered) ctx.lineTo(to.x + 4, to.y - 5)
            //if (isStoryEntered) ctx.lineTo(to.x - 50, to.y + 25)
            //if (isHireEntered) ctx.lineTo(to.x + 50, to.y + 25)
            b1.x = b1.x + 50;
            b1.y = b1.y + 50;

            b2.x = b2.x + 50;
            b2.y = b2.y + 50;

            b3.x = b3.x + 50;
            b3.y = b3.y + 50;
            //redrawLines();
        } catch(e) {

        }
        setButtonsCoords([
            b1,
            b2,
            b3
        ])
    }

    useEffect(() => {
        applyLayout(canvas1)
        applyLayout(canvas2)
        applyLayout(canvas3)

        btn1Ref.current.addEventListener('mouseover', on1BtnEnter)
        btn1Ref.current.addEventListener('mouseleave', on1BtnLeave)

        btn2Ref.current.addEventListener('mouseover', on2BtnEnter)
        btn2Ref.current.addEventListener('mouseleave', on2BtnLeave)

        btn3Ref.current.addEventListener('mouseover', on3BtnEnter)
        btn3Ref.current.addEventListener('mouseleave', on3BtnLeave)

        if (!buttonsCoords.length) {
            setButtonsCoords([
                btn1Ref.current?.getBoundingClientRect(),
                btn2Ref.current?.getBoundingClientRect(),
                btn3Ref.current?.getBoundingClientRect(),
            ])
        }
        window.addEventListener('mousemove', onMove)

        window.addEventListener('mousemove', btnMove1)

        window.addEventListener('resize', resizeEvent)

        return () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mousemove', btnMove1)

            btn1Ref.current?.removeEventListener('mouseover', on1BtnEnter)
            btn1Ref.current?.removeEventListener('mouseleave', on1BtnLeave)

            btn2Ref.current?.removeEventListener('mouseover', on2BtnEnter)
            btn2Ref.current?.removeEventListener('mouseleave', on2BtnLeave)

            btn3Ref.current?.removeEventListener('mouseover', on3BtnEnter)
            btn3Ref.current?.removeEventListener('mouseleave', on3BtnLeave)
        }
    }, [
        buttonsCoords.length,
        is1BtnHovered,
        is2BtnHovered,
        is3BtnHovered,
        on1BtnEnter,
        on1BtnLeave,
        on2BtnEnter,
        on2BtnLeave,
        on3BtnEnter,
        on3BtnLeave,
    ])

    const casesClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsCasesClicked((isCasesClicked) => !isCasesClicked)
        redrawLines("cases");
        if (!isCasesClicked) {   
            btn1_moved.style = "transition: none !important;";
            setTimeout(() => {
                var elem_r = document.getElementById('lineanimationrightfirst_svg');
                var elem_l = document.getElementById('lineanimationleftfirst_svg');
                var elem_r_ = document.getElementsByClassName('line-animation-right');
                var elem_l_ = document.getElementsByClassName('line-animation-left');
                for (let index = 0; index < elem_r_.length; index++) {
                    elem_r_[index].style.height = elem_r.getAttribute("height") + "px";
                }
                for (let index = 0; index < elem_l_.length; index++) {
                    elem_l_[index].style.height = elem_l.getAttribute("height") + "px";
                } 
            }, 500);
        } else {
            var elem_r_ = document.getElementsByClassName('line-animation-right');
            var elem_l_ = document.getElementsByClassName('line-animation-left');
            for (let index = 0; index < elem_r_.length; index++) {
                elem_r_[index].style.height = 0 + "px";
            }
            for (let index = 0; index < elem_l_.length; index++) {
                elem_l_[index].style.height = 0 + "px";
            }
        }
    }
    const storyClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsStoryClicked((isStoryClicked) => !isStoryClicked)
        redrawLines("story");
        if (!isStoryClicked) {   
            setTimeout(() => {
                var elem_r = document.getElementById('lineanimationrightfirst_svg_story');
                var elem_l = document.getElementById('lineanimationleftfirst_svg_story');
                var elem_r_ = document.getElementsByClassName('line-animation-right_story');
                var elem_l_ = document.getElementsByClassName('line-animation-left_story');
                for (let index = 0; index < elem_r_.length; index++) {
                    elem_r_[index].style.height = elem_r.getAttribute("height") + "px";
                }
                for (let index = 0; index < elem_l_.length; index++) {
                    elem_l_[index].style.width = elem_l.getAttribute("width") + "px";
                } 
            }, 0);
        } else {
            var elem_r_ = document.getElementsByClassName('line-animation-right_story');
            var elem_l_ = document.getElementsByClassName('line-animation-left_story');
            for (let index = 0; index < elem_r_.length; index++) {
                elem_r_[index].style.height = 0 + "px";
            }
            for (let index = 0; index < elem_l_.length; index++) {
                elem_l_[index].style.width = 0 + "px";
            }
        }
    }
    const hireClicked = () => {
        setIsCanvasesHidded(!isCanvasesHidded)
        setIsHireClicked((isHireClicked) => !isHireClicked)
        redrawLines("hire");
        if (!isHireClicked) {   
            setTimeout(() => {
                var elem_r = document.getElementById('lineanimationrightfirst_svg_hire');
                var elem_l = document.getElementById('lineanimationleftfirst_svg_hire');
                var elem_r_ = document.getElementsByClassName('line-animation-right_hire');
                var elem_l_ = document.getElementsByClassName('line-animation-left_hire');
                for (let index = 0; index < elem_r_.length; index++) {
                    elem_r_[index].style.height = elem_r.getAttribute("height") + "px";
                }
                for (let index = 0; index < elem_l_.length; index++) {
                    elem_l_[index].style.width = elem_l.getAttribute("width") + "px";
                } 
            }, 0);
        } else {
            var elem_r_ = document.getElementsByClassName('line-animation-right_hire');
            var elem_l_ = document.getElementsByClassName('line-animation-left_hire');
            for (let index = 0; index < elem_r_.length; index++) {
                elem_r_[index].style.height = 0 + "px";
            }
            for (let index = 0; index < elem_l_.length; index++) {
                elem_l_[index].style.width = 0 + "px";
            }
        }
    }
    const HoveredArrays = (status) => {
        setIsCasesArrayHover((isCasesArrayHover) => status)
    }
    function redrawLines(lay) {
        var width = document.body.clientWidth/2;
        var client_height = window.innerHeight;
        var client_width = window.innerWidth;
        var height = 300;
        if(client_height > 980) {
            height = 500;
        }
        var line_min = 30;
        var line_max = 80;
        var angle_min_1 = 0;
        var angle_max_1 = 7;
        var angle_max_2 = 15;
        var dxStart = 0;
        var dyStart = 30;
        var conterLimit = 30;
        var dxEnd = width;
        var dyEnd = 130;
        var dyEnd_2 = 240;
        if(lay=="story" || lay=="hire") {
            width = document.body.clientWidth;
            dxEnd = width;
        }   
        if(client_height <= 980) {
            dyStart = 30;   
        } else if(client_height <= 2000) {
            dyStart = ((client_height * 8) / 100) - 50;   
        }
        dyEnd = (client_height * 18.4) / 100;
        dyEnd_2 = (client_height * 32.64) / 100;
        // svg
        var ctx_lines = null;
        var ctx_lines_vertical = null;
        if(lay=="story") {
            ctx_lines = document.getElementsByClassName("svg_lines_story");
            ctx_lines_vertical = document.getElementsByClassName("svg_lines_story_vertical");
            for (let index = 0; index < ctx_lines_vertical.length; index++) {
                ctx_lines_vertical[index].setAttribute("width", height);  
                ctx_lines_vertical[index].setAttribute("height", client_height);  
            }
        }  else if(lay=="hire") {
            ctx_lines = document.getElementsByClassName("svg_lines_hire");
            ctx_lines_vertical = document.getElementsByClassName("svg_lines_hire_vertical");
            for (let index = 0; index < ctx_lines_vertical.length; index++) {
                ctx_lines_vertical[index].setAttribute("width", height);  
                ctx_lines_vertical[index].setAttribute("height", client_height);  
            }
        } else if(lay=="cases") {
            ctx_lines = document.getElementsByClassName("svg_lines");
        }
        for (let index = 0; index < ctx_lines.length; index++) {
            ctx_lines[index].setAttribute("width", width);  
            ctx_lines[index].setAttribute("height", height);  
        }
        // path
        if(client_width > 1919) {
            conterLimit = 30;
        }
        if(client_width <= 1919) {
            conterLimit = 20;
        }
        if(client_width <= 1720) {
            conterLimit = 15;
        }
        if (lay=="story") {
            conterLimit = conterLimit * 2;
            var dxEnd_vertical = (document.body.clientWidth * 15) / 100;
            drawLines(lay,ctx_lar_1_story,"r1",generateLines(30,30,dxEnd + 60,90,line_min,line_max,angle_min_1,angle_max_1,conterLimit),"#7344F4");
            drawLines(lay,ctx_lar_2_story,"r2",generateLines(30,30,dxEnd + 60,90,line_min,line_max,angle_min_1,angle_max_1 + 3,conterLimit),"#EEBF1B");       
            drawLines(lay,ctx_lal_1_story,"l1",generateLines(30,client_height,dxEnd_vertical-30,0,line_min,line_max,angle_min_1,angle_max_1,conterLimit),"#7344F4");
            drawLines(lay,ctx_lal_2_story,"l2",generateLines(30,client_height,dxEnd_vertical-30,0,line_min,line_max,angle_min_1,angle_max_1 + 3,conterLimit),"#EEBF1B");  
        } else if (lay=="hire") {
            conterLimit = conterLimit * 2;
            var dxEnd_vertical = (document.body.clientWidth * 15) / 100;
            drawLines(lay,ctx_lar_1_hire,"r1",generateLines(30,30,dxEnd + 60,90,line_min,line_max,angle_min_1,angle_max_1,conterLimit),"#7344F4");
            drawLines(lay,ctx_lar_2_hire,"r2",generateLines(30,30,dxEnd + 60,90,line_min,line_max,angle_min_1,angle_max_1 + 3,conterLimit),"#EEBF1B");       
            drawLines(lay,ctx_lal_1_hire,"l1",generateLines(30,client_height,dxEnd_vertical-30,0,line_min,line_max,angle_min_1,angle_max_1,conterLimit),"#7344F4");
            drawLines(lay,ctx_lal_2_hire,"l2",generateLines(30,client_height,dxEnd_vertical-30,0,line_min,line_max,angle_min_1,angle_max_1 + 3,conterLimit),"#EEBF1B");  
        } else if (lay=="cases") {
            drawLines(lay,ctx_lar_1,"r1",generateLines(dxStart,dyStart,dxEnd + 60,dyEnd,line_min,line_max,angle_min_1,angle_max_1,conterLimit),"#7344F4");
            drawLines(lay,ctx_lar_2,"r2",generateLines(dxStart,dyStart,dxEnd + 60,dyEnd,line_min,line_max,angle_min_1,angle_max_2,conterLimit),"#EEBF1B");       
            drawLines(lay,ctx_lal_1,"l1",generateLines(dxStart,dyStart,dxEnd + 60,dyEnd_2,line_min,line_max,angle_min_1,angle_max_1,conterLimit),"#7344F4");
            drawLines(lay,ctx_lal_2,"l2",generateLines(dxStart,dyStart,dxEnd + 60,dyEnd_2,line_min,line_max,angle_min_1,angle_max_2,conterLimit),"#EEBF1B");  
        }  
    } 
    //нарисовать линии
    function drawLines(lay,ctx_,type,arr,color){
        var d_str = "M" + arr[0][0] + " " + arr[0][1] + " ";
        ctx_.setAttribute("stroke", color);
        ctx_.setAttribute("stroke-width", "3");
        for(var i  = 1; i < arr.length;i++)
        {
            d_str = d_str + "L" + Math.round(arr[i][0]) + " " + Math.round(arr[i][1]) + " ";
        }
        if (lay=="cases") {
            if(type == "r1") {
                setAttributeRightOne(d_str);
            } else if (type == "r2") {
                setAttributeRightTwo(d_str);
            } else if (type == "l1") {
                setAttributeLeftOne(d_str);
            } else if (type == "l2") {
                setAttributeLeftTwo(d_str);
            }
        } else if(lay=="story") {
            if(type == "r1") {
                setAttributeRightOneStory(d_str);
            } else if (type == "r2") {
                setAttributeRightTwoStory(d_str);
            } else if (type == "l1") {
                setAttributeLeftOneStory(d_str);
            } else if (type == "l2") {
                setAttributeLeftTwoStory(d_str);
            }
        } else if(lay=="hire") {
            if(type == "r1") {
                setAttributeRightOneHire(d_str);
            } else if (type == "r2") {
                setAttributeRightTwoHire(d_str);
            } else if (type == "l1") {
                setAttributeLeftOneHire(d_str);
            } else if (type == "l2") {
                setAttributeLeftTwoHire(d_str);
            }
        }
    }
    //Генерировать кривую
    function generateLines(xStart,yStart,xEnd,yEnd, lenRandMin,lenRandMax,angleDeviationMin, angleDeviationMax, conterLimit ) {
        var arrayPos = [[xStart,yStart]];
        var xCur = xStart;
        var yCur = yStart;
        angleDeviationMin = (angleDeviationMin * Math.PI)/180;//в радианы
        angleDeviationMax = (angleDeviationMax * Math.PI)/180;//в радианы
    
        var deviationPos = false;
        var counter = 0;
        do {
            if(counter == conterLimit) {
                xCur = xEnd;
                yCur = yEnd;
            }
            else {
                var len = rand(lenRandMin,lenRandMax);
                var angle = getAngle(xCur,yCur,xEnd,yEnd) + (deviationPos?rand(angleDeviationMin,angleDeviationMax):-rand(angleDeviationMin,angleDeviationMax));
                xCur += Math.cos(angle) * len;
                yCur += Math.sin(angle) * len;
            }
            arrayPos.push([xCur,yCur]);
            deviationPos = !deviationPos;
            counter++;
        } while (!(xCur == xEnd && yCur == yEnd));
        console.log(arrayPos.length);
        return arrayPos;
    }
    //Получить рандомное от min до max
    function rand(min, max) {
        return min + Math.random() * (max - min)
    }
    //Радианы в градусы
    function toDeg(rad){
        return rad * 180/Math.PI;
    }
    //Получить угол между двумя точками
    function getAngle(dx,dy,dx1,dy1){
        return Math.atan2(dy - dy1,dx - dx1) + Math.PI;
    }
    ///Получить растояние между двумя точками
    function getDist(x,y,x1,y1){
        return Math.sqrt(Math.pow(x1 - x,2)+Math.pow(y1-y,2));
    }
    // useEffect(() => {
    //     if (
    //         (isCasesClicked && isCasesEntered) ||
    //         (isStoryClicked && isStoryEntered) ||
    //         (isHireClicked && isHireEntered)
    //     )
    //         PlaceCursor.classList.add('standartCursor')
    // }, [
    //     isCasesClicked,
    //     isCasesEntered,
    //     isStoryClicked,
    //     isStoryEntered,
    //     isHireClicked,
    //     isHireEntered,
    // ])

    return (
        <div className="mainPageSelector unselectable">
            <div className="no_overflow unselectable">
                <video className={(isCasesClicked || isHireClicked || isStoryClicked) && !isCasesArrayHover ? 'showreel no_overflow video__filter unselectable' : 'showreel no_overflow unselectable'} autoPlay loop muted>
                    <source src={videoPower} type="video/webm" />
                </video>
                <div className="showreel__mobile unselectable" />
                <div className="toner unselectable" />
                <div className="no_overflow unselectable">
                    <div className={isCasesClicked ? 'line-animation-wrapper line-animation-wrapper-right' : 'line-animation-wrapper line-animation-wrapper-right displayNoneMain'}>
                        <div className='line-animation-right canvas-line-animation'>
                            <svg id="lineanimationrightfirst_svg" className='svg_lines' width="0" height="0">
                                <path id="lineanimationrightfirst" fill="none" stroke="" d={dAttributeRightOne} />
                                <path id="lineanimationrightsecond" fill="none" stroke="" d={dAttributeRightTwo}>
                                </path>
                                
                            </svg>
                        </div>
                    </div>
                    <div className={isCasesClicked ? 'line-animation-wrapper line-animation-wrapper-left' : 'line-animation-wrapper line-animation-wrapper-left displayNoneMain'}>
                        <div className='line-animation-left canvas-line-animation'>
                            <svg id="lineanimationleftfirst_svg" className='svg_lines' width="0" height="0">
                                <path id="lineanimationleftfirst" fill="none" stroke="" d={dAttributeLeftOne} />
                                <path id="lineanimationleftsecond" fill="none" stroke="" d={dAttributeLeftTwo} />
                            </svg>
                        </div>
                    </div>
                    <div className={isStoryClicked ? 'line-animation-wrapper_story line-animation-wrapper-right_story' : 'line-animation-wrapper_story line-animation-wrapper-right_story displayNoneMain'}>
                        <div className='line-animation-right_story canvas-line-animation_story'>
                            <svg id="lineanimationrightfirst_svg_story" className='svg_lines_story' width="0" height="0">
                                <path id="lineanimationrightfirst_story" fill="none" stroke="" d={dAttributeRightOneStory} />
                                <path id="lineanimationrightsecond_story" fill="none" stroke="" d={dAttributeRightTwoStory}>
                                </path> 
                            </svg>
                        </div>
                    </div>
                    <div className={isStoryClicked ? 'line-animation-wrapper_story line-animation-wrapper-left_story' : 'line-animation-wrapper_story line-animation-wrapper-left displayNoneMain'}>
                        <div className='line-animation-left_story canvas-line-animation_story_vertical'>
                            <svg id="lineanimationleftfirst_svg_story" className='svg_lines_story_vertical' width="0" height="0">
                                <path id="lineanimationleftfirst_story" fill="none" stroke="" d={dAttributeLeftOneStory} />
                                <path id="lineanimationleftsecond_story" fill="none" stroke="" d={dAttributeLeftTwoStory} />
                            </svg>
                        </div>
                    </div>

                    <div className={isHireClicked ? 'line-animation-wrapper_hire line-animation-wrapper-right_hire' : 'line-animation-wrapper_hire line-animation-wrapper-right_hire displayNoneMain'}>
                        <div className='line-animation-right_hire canvas-line-animation_hire'>
                            <svg id="lineanimationrightfirst_svg_hire" className='svg_lines_hire' width="0" height="0">
                                <path id="lineanimationrightfirst_hire" fill="none" stroke="" d={dAttributeRightOneHire} />
                                <path id="lineanimationrightsecond_hire" fill="none" stroke="" d={dAttributeRightTwoHire}>
                                </path> 
                            </svg>
                        </div>
                    </div>
                    <div className={isHireClicked ? 'line-animation-wrapper_hire line-animation-wrapper-left_hire' : 'line-animation-wrapper_hire line-animation-wrapper-left displayNoneMain'}>
                        <div className='line-animation-left_hire canvas-line-animation_hire_vertical'>
                            <svg id="lineanimationleftfirst_svg_hire" className='svg_lines_hire_vertical' width="0" height="0">
                                <path id="lineanimationleftfirst_hire" fill="none" stroke="" d={dAttributeLeftOneHire} />
                                <path id="lineanimationleftsecond_hire" fill="none" stroke="" d={dAttributeLeftTwoHire} />
                            </svg>
                        </div>
                    </div>



                    <MainPageButton
                        canvas={canvas1}
                        onClick={casesClicked}
                        isHovered={isCasesEntered}
                        title="cases"
                        isClicked={isCasesClicked}
                        className={
                            isCasesClicked
                                ? 'clickedCases firstCircle unselectable'
                                : 'firstCircle unselectable'
                        }
                        ref={btn1Ref}
                    />

                    <MainPageButton
                        canvas={canvas2}
                        onClick={storyClicked}
                        isHovered={is2BtnHovered}
                        title="story"
                        ref={btn2Ref}
                        isClicked={isStoryClicked}
                        className={
                            isStoryClicked
                                ? 'clickedStory secondCircle unselectable'
                                : 'secondCircle unselectable'
                        }
                    />
                    <MainPageButton
                        canvas={canvas3}
                        onClick={hireClicked}
                        isHovered={is3BtnHovered}
                        title="hire us"
                        ref={btn3Ref}
                        isClicked={isHireClicked}
                        className={
                            isHireClicked
                                ? 'clickedHire thirdCircle unselectable'
                                : 'thirdCircle unselectable'
                        }
                        x
                    />
                    <Cases
                        polyline={polyline}
                        casesArray={casesArray}
                        coordsToX={buttonsCoords[0]?.x}
                        coordsToY={buttonsCoords[0]?.y}
                        isCasesEntered={isCasesEntered}
                        isCanvasesHidded={isCanvasesHidded}
                        canvases={[canvas1, canvas2, canvas3]}
                        isClicked={isCasesClicked}
                        HoveredArrays={HoveredArrays}
                    />
                    <Story
                        polyline={polyline1}
                        coordsToX={buttonsCoords[1]?.x}
                        coordsToY={buttonsCoords[1]?.y}
                        isStoryEntered={isStoryEntered}
                        isCanvasesHidded={isCanvasesHidded}
                        canvases={[canvas1, canvas2, canvas3]}
                        isClicked={isStoryClicked}
                    />
                    <Hire
                        polyline={polyline2}
                        coordsToX={buttonsCoords[2]?.x}
                        coordsToY={buttonsCoords[2]?.y}
                        isHireEntered={isHireEntered}
                        isCanvasesHidded={isCanvasesHidded}
                        canvases={[canvas1, canvas2, canvas3]}
                        isClicked={isHireClicked}
                        setIsClicked={setIsHireClicked}
                    />
                    <div className={` main no_overflow unselectable`}>
                        {(isCasesClicked || isHireClicked || isStoryClicked) && !isCasesArrayHover ? <div className="special__noise"></div> : ""}
                        {(isCasesClicked || isHireClicked || isStoryClicked) && !isCasesArrayHover ? <div className="special__noise__overlay"></div> : "" }
                        {isCasesArrayHover ? <div className="special__overlay__x"></div> : ""}
                        <div className="mobile__btns">
                            <Link to="/storyMobile">
                                <button>story</button>
                            </Link>
                            <Link to="/casesMobile">
                                <button>cases</button>
                            </Link>
                            <Link to="/hireMobile">
                                <button>hire us</button>
                            </Link>
                        </div>
                        <div className="main__top">
                            <TypingText isClicked={isCasesClicked} />
                            <div className="main__logo" />
                        </div>
                        <div className="main__bottom">
                            <div className="fhd">
                                <div className="main__bottom__video">
                                    <div className="progress-done"></div>
                                </div>
                            </div>
                            <div className="mobile">
                                <div className="main__bottom__video">
                                    <div className="progress-done"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage
