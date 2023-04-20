import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import './Layout.css';

const Layout: React.FC = () => {
  const [shapeList, setShapeList] = useState<string[]>([
    'square',
    'circle',
    'oval',
    'trapezoid',
    'rectangle',
    'parallelogram',
  ]);
  const [lineList, setLineList] = useState<string[]>(['line1', 'line2']);
  const { lang } = useParams<{ lang: string }>();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  const UpDownMove = () => {
    const first = lineList[0];
    const last = lineList[lineList.length - 1];
    const newLineList = [last, first];
    setLineList(newLineList);
  };

  const LeftMove = () => {
    const first = shapeList[0];
    const newShapeList = [...shapeList.slice(1), first];
    setShapeList(newShapeList);
  };

  const RightMove = () => {
    const last = shapeList[shapeList.length - 1];
    const newShapeList = [last, ...shapeList.slice(0, shapeList.length - 1)];
    setShapeList(newShapeList);
  };

  const shuffleArray = (arr: string[]) => {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const RandomMove = () => {
    const newShapeList = shuffleArray(shapeList);
    setShapeList(newShapeList);
  };

  const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.href = '/layout/' + event.target.value;
  };

  return (
    <div className="background">
      <div className="navbar">
        <h2>{t('Layout & Style')}</h2>
        <select onChange={handleChangeLang}>
          <option value="">{t('Select')}</option>
          <option value="en">{t('EN')}</option>
          <option value="th">{t('TH')}</option>
        </select>
      </div>
      <Row className="rowstyle1">
        <Col span={3}></Col>
        <Col span={18}>
          <Row>
            <Col span={6}>
              <div className="centeredlayout">
                <button onClick={LeftMove} className="squarecreate1">
                  <div className="triangle-left"></div>
                </button>
              </div>
            </Col>
						<Col span={12}>
							<div className="centeredlayout">
								<button onClick={UpDownMove} className="squarecreate2">
									<div className="side1"><div className="triangle-up"></div></div>
									<div className="side2"><div className="triangle-down"></div></div>
								</button>
							</div>
						</Col>
						<Col span={6}>
							<div className="centeredlayout">
								<button onClick={RightMove} className="squarecreate1">
									<div className="triangle-right"></div>
								</button>
							</div>
						</Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
      <hr />
      <Row className="rowstyle2">
        <Col span={3}></Col>
        <Col span={18}>
          <Row className={lineList[0]}>
            <Col span={6}>
              <div className="centeredlayout">
                <button className="squarecreate1" onClick={RandomMove}>
                  <div className={shapeList[0]}></div>
                </button>
              </div>
            </Col>
						<Col span={6}>
							<div className="centeredlayout">
								<button className="squarecreate1" onClick={RandomMove}>
									<div className={shapeList[1]}></div>
								</button>
							</div>
						</Col>
						<Col span={6} >
							<div className="centeredlayout">
								<button className="squarecreate1" onClick={RandomMove}>
									<div className={shapeList[2]}></div>
								</button>
							</div>
						</Col>
          </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
			<Row className="rowstyle3">
				<Col span={3}></Col>
				<Col span={18}>
					<Row className={lineList[1]}>
						<Col span={6} >
							<div className="centeredlayout">
								<button className="squarecreate1" onClick={RandomMove}>
									<div className={shapeList[3]}></div>
								</button>
							</div>
						</Col>
						<Col span={6}>
							<div className="centeredlayout">
								<button className="squarecreate1" onClick={RandomMove}>
									<div className={shapeList[4]}></div>
								</button>
							</div>
						</Col>
						<Col span={6} >
							<div className="centeredlayout">
								<button className="squarecreate1" onClick={RandomMove}>
									<div className={shapeList[5]}></div>
								</button>
							</div>
						</Col>
					</Row>
				</Col>
				<Col span={3}></Col>
			</Row>
		</div>
	)
}

export default Layout