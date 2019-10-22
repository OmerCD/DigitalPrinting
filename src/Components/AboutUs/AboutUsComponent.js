import React, { Component } from 'react';
import './AboutUsComponent.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import styled, { keyframes } from 'styled-components';
import { bounceInLeft } from 'react-animations';
import mainPictureAnim from 'react-animations/lib/flip';

export default class AboutUsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
  }

  render() {
    const leftIn = keyframes`${bounceInLeft}`;
    const TitleBase = styled.span`
      position: absolute;
      left: -200px;
      width: 100%;
    `;
    const TitleAboutUs = styled(TitleBase)`
      animation: 0.5s ${leftIn};
      top: 200px;
    `;
    const Title = styled(TitleBase)`
      animation: 1s ${leftIn};
      top: 127px;
    `;
    const TitleSpan = styled.span`
      color: white;
      font: bold 24px/45px Helvetica, Sans-Serif;
      letter-spacing: -1px;
      background: rgb(0, 0, 0);
      background: rgba(0, 0, 0, 0.7);
      padding: 10px;
      padding-left: 250px;
      padding-right: 15px;
      font-size: 36pt;
      text-shadow: 0px 2px 3px rgba(0, 0, 0, 0.8);
    `;
    const MainImage = styled.img`
      width: 100%;
      margin-top: -80px;
      height: 550px;
      position: relative;
      animation: 4s ${props => (props.play ? mainPictureAnim : '')};
    `;
    const CornerEdgeTitleSpan = styled(TitleSpan)`
      border-radius: ${props => {
        if (props.top) {
          return '0 35px 0 0';
        }
        if (props.bottom) {
          return '0 0 35px 0 ';
        }
        return '0';
      }};
    `;
    return (
      <div>
        <div style={{ marginBottom: '75px' }}>
          <MainImage
            // play={this.state.imageLoaded}
            src="https://picsum.photos/1920/550"
            // onLoad={() => this.setState({ imageLoaded: true })}
            width="1920"
            height="550"
          />
          <TitleAboutUs>
            <CornerEdgeTitleSpan bottom>Hakkımızda</CornerEdgeTitleSpan>
          </TitleAboutUs>
          <Title>
            <CornerEdgeTitleSpan top style={{ borderBottom: 'solid 2px red' }}>
              Dijital Baskı ve Afiş
            </CornerEdgeTitleSpan>
          </Title>
        </div>
        <Container>
          <Row style={{ marginBottom: '50px' }}>
            <Col xs={6} md={6}>
              <Image src="https://picsum.photos/800/600" width="800" height="600" fluid rounded />
            </Col>
            <Col xs={6} md={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={6} md={6}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut aliquam purus sit amet luctus
                venenatis lectus magna. Velit aliquet sagittis id consectetur. Feugiat vivamus at
                augue eget arcu dictum varius duis at. Lectus sit amet est placerat in. Sed egestas
                egestas fringilla phasellus faucibus scelerisque. Sollicitudin tempor id eu nisl.
                Nunc aliquet bibendum enim facilisis gravida neque convallis a. Magna fermentum
                iaculis eu non diam phasellus. Volutpat lacus laoreet non curabitur.
              </p>
              <p>
                Tincidunt ornare massa eget egestas purus. At quis risus sed vulputate odio ut enim
                blandit volutpat. Et netus et malesuada fames ac turpis egestas. Dolor morbi non
                arcu risus. Sed risus ultricies tristique nulla aliquet enim tortor at. Odio eu
                feugiat pretium nibh ipsum consequat. Mauris vitae ultricies leo integer. Pretium
                vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. Dui vivamus
                arcu felis bibendum ut tristique et. Turpis massa sed elementum tempus egestas sed
                sed. Et magnis dis parturient montes nascetur. Aliquet risus feugiat in ante metus
                dictum at tempor. Libero justo laoreet sit amet cursus sit amet dictum.
              </p>
            </Col>
            <Col xs={6} md={6}>
              <Image src="https://picsum.photos/800/600" width="800" height="600" fluid rounded />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
