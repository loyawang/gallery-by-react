require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//获取图片相关数据
var imagesDatas = require('../data/imageDatas.json');
//利用自执行函数，将图片名信息转化为图片url路径信息
function genImgDatas(imgArr){
  for(var i=0,j=imgArr.length; i<j; i++){
     var singleImgData = imgArr[i];
     singleImgData.imgUrl = require('../images/'+singleImgData.fileName)
     imgArr[i] = singleImgData;
  }
  return imgArr;
}
imagesDatas = genImgDatas(imagesDatas);

 class ImgFigure extends React.Component{
  render(){
    return(
      <figure className="img-figure">
        <img src={this.props.data.imgUrl}  alt={this.props.data.title}/>
        <figcaption>
          <h2 className="">{this.props.data.desc}</h2>
        </figcaption>
      </figure>
    )
  }
}

class AppComponent extends React.Component {

  render() {

    var controllerUnits = [],imgFigures = [];
    imagesDatas.forEach(function(val,index) {
      imgFigures.push(<ImgFigure data={val} key={index}/>)
    });

    return (
     <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
            {controllerUnits}
        </nav>
     </section>
    );
  }
}
AppComponent.defaultProps = {
  
};

export default AppComponent;
