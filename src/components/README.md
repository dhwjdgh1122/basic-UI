## member-service
      /* 텍스트 링크 모음 */
      :root{
        --base-font-famaily: "SUIT Variable", sans-serif; 
      }

      .member-service {
        --font-size: 0.875rem;

        font-family: var(--base-font-famaily);
        font-size: 0;
        
        list-style-type: none;
        padding-inline-start: 0;    /*왼쪽 여백 사라지는 효과*/
        margin: 0;
        text-align: right;               /*세트효과로 작성하면 좋을 듯*/
          
                          
        
        li {                            /*처음에 인라인사이즈200px 적용안됨,width 지원안하니까*/
                  
          display: inline-block;          /*하지만 인라인 블록으로 변경하면 바뀜*/
          /*inline-size: 200px;*/             /*여백(노란색)이 생기는데 마진을 a와 li 둘다 작성해도 안바뀜*/
          margin: 0;
          font-size: var(--font-size);        /*html 코드에 공백이랑 연관이 있다, 한 줄로 마크업하면 된다 대신 가독성 떨어짐 */
          
          a {
            display: inherit;
            padding: 8px 8px 8px 4px;           /*    */    /*이 방법이 좋은 점 콜롬은 인식을 안함 패딩 아님 어딘지 찾아야함 코드에서  */
            font-variant: small-caps;               /*</li   /*왼쪽처럼 꺾새로 작성함 옜날에는  */
            margin: 0;                             /*><li>*/
            text-transform: uppercase;
            color: inherit;
            text-decoration: none;            
          }                                        /*상속을 이용하자 ul한테 사이즈0을주고  */
                                          
        } 
        
                                        
                                          
                                    
      }
# 
    <li>
        <a href="/">홈</a>
      </li>
      <li>
        <span>:</span>
        <a href="/">로그인</a>
      </li>
- 접근성에서 바라보면 홈 링크, 로그인 링크 이렇게 음성으로 들린다.
굳이 읽어주지 않게끔, 화면에는 보이지만 읽어주지 않게 하는 방법 `aria-hidden: true` 속성을 이용한다.
#    
    padding-inline-start: 0;    /*왼쪽 여백 사라지는 효과*/
#
    li {                                             
     display: inline-block;         /*하지만 인라인 블록으로 변경하면 바뀜*/ 
    inline-size: 200px;             /*처음에 인라인사이즈200px 적용안됨,width 지원안하니까*/
    margin: 0;
    }

#
- 여백(노란색)이 공간이 생긴다, 없앨려고 마진을 a와 li에 둘 다 작성해도 안 없어짐
why? html 코드에 공백이랑 연관이 있다, li를 작성할때 줄 바꿈(공백)이 있다 
- 한 줄로 마크업하면 되지만 가독성이 떨어지는 단점이 있음
- 옛날에는 `li태그`가 끝나기 전에 >을 앞으로 붙여줘서 작성했다
- 하지만 상속을 이용하여 `ul`한테 `size 0`을 주면 해결가능하다
- 장점: 화면상에서 `:콜롬`은 마우스를 올려놔도 인식을 안해서 사용자 입장에서 ui가 더 최적화다?
#
    padding: 8px 8px 8px 4px;
- 꼭 요소에 들어가야만 버튼 클릭이 아니라 그 주변 어느 정도 허용값을 주고 싶은데 변화가 없음 why? a는 태어날때부터 디스플레이서 가지는 기본값이 inline이고 좌우패딩은 정상 값을 가지지만 상하는 반영이 안 될거다 
- 하지만 반영이 된다
- a에 `display:inherit;` 해주면 부모의 크기만큼 상속받아서 허용값을 건드릴 수 있는건가?   


