/**
 * Created by enzo on 2017/10/21.
 */


// ==UserScript==
// @name         高校邦脚本
// @namespace    http://tampermonkey.net/
// @version      0.0.4
// @description  高校邦脚本
// @author       杨志清
// @require      http://cdn.bootcss.com/jquery/1.8.3/jquery.min.js
// @match        https://*.class.gaoxiaobang.com/*
// @grant        none
// ==/UserScript==

function questionAuto() {
    //勾选全部答案
    questionList.forEach(function (item, index) {
        item.answerList.forEach(function (item, index) {
            if (item.correct == "1") {
                var answerId = item.answerId
                Array.prototype.forEach.call(document.getElementsByTagName('i'), function (item, index) {
                    if (item.getAttribute('answer_id') == answerId) {
                        item.click()
                    }
                })
            }
        })
    })
    //提交
    var oBtn = document.getElementsByClassName('btn btn-default gxb-sure')[0]
    oBtn.click()
}

function skipExam() {
    //检测并跳过章节测试
    var testCon = document.getElementsByClassName("gxb-btn-pri gxb-btn-big quiz-join chapter_id")
    var testCon2 = document.getElementsByClassName("gxb-btn-pri gxb-btn-big disable")
    var continueBtn = document.getElementsByClassName("gxb-next-blue")
    for (var r = 0; r < testCon.length; r++) {
        var test = testCon[r]
        if (test.className == "gxb-btn-pri gxb-btn-big quiz-join chapter_id") {
            var clickContinue = continueBtn[r]
            clickContinue.click()
        }
    }
    for (var u = 0; u < testCon2.length; u++) {
        var test2 = testCon2[u]
        if (test2.className == "gxb-btn-pri gxb-btn-big disable") {
            var clickContinue2 = continueBtn[u]
            clickContinue2.click()
        }
    }
    //检测并跳过讨论
    var dicCon = document.getElementsByClassName("gxb-btn-pri gxb-btn-nav post-submit")
    var dicCon2 = document.getElementsByClassName("gxb-btn-pri gxb-btn-nav post-submit-edit")
    var continueBtn = document.getElementsByClassName("gxb-next-blue")
    for (var f = 0; f < dicCon.length; f++) {
        var test = dicCon[f]
        if (test.className == "gxb-btn-pri gxb-btn-nav post-submit") {
            var clickContinue = continueBtn[f]
            clickContinue.click()
        }
    }
    for (var f = 0; f < dicCon.length; f++) {
        var test = dicCon[f]
        if (test.className == "gxb-btn-pri gxb-btn-nav post-submit-edit") {
            var clickContinue = continueBtn[f]
            clickContinue.click()
        }
    }

}
function autoPlay() {
    //加速倍率推荐2.5，太高会导致播放不记录分数
    var vid = document.getElementById("vjs_video_3_html5_api")
    if (vid != undefined) {
        vid.playbackRate = 2.5
    }

    //继续观看
    var oBtn2 = document.getElementsByClassName('vjs-play-control vjs-control vjs-button vjs-paused')
    for (var i = 0; i < oBtn2.length; i++) {
        var click = oBtn2[i]
        click.click()
    }

}


window.setInterval(autoPlay, 3000)


