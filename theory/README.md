## 01-font

#    
    /* 상대단위 em 은 부모로부터 상속 */
    /* 상대단위 rem 은 html 요소를 기준으로 계산 */
    /* 상대단위 vw는 뷰포트를 기준으로 계산 */

    html {
      font-size: 10px;
    }
    h1 {
      line-height: 1;
      font-size: 60px;
      font-weight: 100;
      font-style: italic;
      font-variant: small-caps; 
    } 

    div {
      font-size: 1.5em;
    }
    /* 1.5rem - 상속된 글자 크기의 비례 */
    /* 32픽셀 *1.5 */  /* 32픽셀 곱하기 2em =  */
    p {
      font-size: 2em;
      line-height: 1;
    }
    @media (max-width: 767px) {
      p {
        font-size: 3vw;
      }
    } 

- 우선 h1태그와 p태그의 폰트 사이즈가 웹 페이지에서 다르게 보이는 이유는 개발자도구 에서
h태그를 눌러보면 에이전시 스타일이 정해져 있기 때문이다.

- 절대단위 px
- 상대단위 em rem % vw cqw = 루트에 따라서 변화한다.

#    
    html {
      font-size: 10px;
    }
    div {
      font-size: 1.5em;
    }
    p {
      font-size: 2em;
    }
 - p태그는 20일까 30일까, 정답은 30 why? 상속된 글자 크기의 비례, **루트**에 따라서 변화하기 때문에 p태그의 **부모**인 div 태그의 영향을 받음

 # 
      font-variant: small-caps; // 소문자 크기를 유지하면서 대문자로 바꿔주는 기능
## 02-box-model
     
       body {
      font-size: 20px;
      }
      div {
        border:  1px solid red;
      }
      [class^="box"] {
        background: yellow;
        padding: 20px;
      }
      .box1{
        width: 500px;
        box-sizing: border-box;
      }
      /* 16*30= 480 */
      .box2 {
        width: 30em;
        margin-bottom: 50px;
      }
      .box3 {
        width: 25rem;
        margin-top: 100px;
      }
      .box4 {
        inline-size: 50vw; // 중간정렬 같은 느낌 
        margin: 0 auto;
      }    
 - 인라인요소는 `line height`에 영향을 받는다(좌우) 위 라인 패딩이 정상적으로 작동하지
 않는 것 처럼 보인다
 - `width`의 논리 속성은 `lnline-size` 이다

 # 03-block-lnline     
    p {
      background-color: yellow;
      inline-size: 600px;
      /* padding: 20px; */
    }
    span {
      display: inline-block;
      background-color: pink;
      padding: 20px;
      width: 200px;
      margin: 50px 20px;
      width: 150px;
    }
 - 600px 처럼 안 보인다 why? 적용이 안된다 `display` 인라인 속성은
 `width` 영향을 미치지 않도록 한다 - 개발자도구

## 04-inheritance-cascaed
    body {
    color: #ff0000;
    font-size: 30px;
    }
    div {
      border: 1px solid blue;
    }
    h1.heading {
      color: purple; 
    }
    h1 {
      color: green; 
    }
    .techit {
      color: black;
    }
    .container {
      color: hotpink;
    }
- 어떤 거는 상속이 되고 안된다 상속보단 내가 가진 값으로 보이고 `border inherit`로 상속받게 부여해준다 - 강제성?
- 나중에 선언한 green 보다 먼저 선언한 보라색이 적용되는 모습 why? 요소,태그 선택자보단 **클래스 선택자**가 우선순위가 더 높기 때문에
- `h1.heading` 처럼 작성하면 우선순위가 높아짐
- `!important` 속성을 부여해주면 순위가 더 높아짐 정적인 스타일이 아니라 동적인 스타일 사용할 때, 스타일을 무조건 바꿔치기 해야할 때 사용한다 가급적 사용 X 

