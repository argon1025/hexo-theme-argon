'use strict';
const simpleIcons = require('simple-icons');
const { DOMParser, XMLSerializer } = require('xmldom');

/**
 * @returns { 
 * hex:number // color Code
 * svg: svg string
 * title : string
 * }
 */
hexo.extend.helper.register('simpleIcons',(iconName, ...customClassList)=>{
    const hasCustomClass = customClassList.length > 0;
    // 아이콘 로드, 없을경우 기본 아이콘 로드
    const icon = iconName in simpleIcons ? simpleIcons[iconName] : simpleIcons.siHashnode;

    // 커스텀 클래스를 추가요청할 경우 
    let customSvgElement;
    if(hasCustomClass){
        const svgElement = new DOMParser().parseFromString(icon.svg, "image/svg+xml").documentElement;
        svgElement.setAttribute("class", customClassList.join(' '));
        customSvgElement = new XMLSerializer().serializeToString(svgElement);
    }

    // 아이콘 정보 리턴
    return {
        colorCode : icon.hex || 'FFFFFFF',
        title : icon.title || 'no title',
        svg: hasCustomClass ? customSvgElement: icon.svg
    };
});