import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import { Link, useParams } from "react-router-dom"
import './Home.css'
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
	let { lang } = useParams<{ lang: string }>();
	const { t, i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(lang)
	}, [i18n, lang])

	const handleChangeLang = (event: React.ChangeEvent<HTMLSelectElement>) => {
		window.location.href = '/' + event.target.value;

	};

	return (
		<div className="backgroundhome">
			<Row>
				<Col span={5}></Col>
				<Col span={14}>
					<Row>
						<Col span={8}>
							<Link className="centeredhome" to={"/layout"}>
								<div className="squarehome">
									<b>{t('Test 1')}</b>
									<br />
									<p>{t('Layout & Style')}</p>
								</div>
							</Link>
						</Col>
						<Col span={8}>
							<div className="centeredhome">
								<div className="squarehome">
									<b>{t('Test 2')}</b>
									<br />
									<p>{t('Connect API')}</p>
								</div>
							</div>
						</Col>
						<Col span={8}>
							<div className="centeredhome">
								<div className="squarehome">
								<b>{t('Test 3')}</b>
								<br />
								<p>{t('Form & Table')}</p>
								</div>
							</div>
						</Col>
					</Row>
				</Col>
				<Col span={5}>
					<select onChange={handleChangeLang} className="selecthome">
						<option value="">{t('Select')}</option>
						<option value="en">{t('EN')}</option>
						<option value="th">{t('TH')}</option>
					</select>
				</Col>
			</Row>
		</div>
	);
};

export default Home;