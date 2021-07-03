 // 정규식 (정규 표현식)
 //regular expression

 var txt = "Hello World! World!";


 var regexp = /World/gi;


 console.log(txt.replace(regexp, "Jason"));


 //매치
 var str = "123849dkfjlk434sfjjlsdk5656fk22232diieeke";
 var regexp01 = /[0-9]/g;
 var result = str.match(regexp01);
 console.log(result);


 var str02 = "red,green,blue,purple,pink,brown";
 var regexp02 = /(red|green)/g;
 var result02 = str02.match(regexp02);
 console.log(result02);


 var tel = "010-3334-9614";
 // 3자리 숫자 - 4자리 숫자 - 4자리
 var regexp03 = /^(010)-\d{4}-\d{4}/;
 // ^ 꺽쇠는 시작이 ()로 시작하는 것.
 // 그 다음 -를 포함할 것.
 // \d{4} 4자리 일것.

 console.log(regexp03.test(tel));


 // xabo0808@naver.com

 var email = "xabo0808@naver.com";

 var regexp04 = /^\w+@\w+(\.\w{2,3})+$/;
 // \w는 문자를 의미합니다. 
 //+는 1개 보다 많을 것을 의미.
 // \. 특수문자를 문자로
 // w{2,3} 2~3자리의 문자
 //(\.\w{2,3})+ 한번만 올것.

 console.log("이메일 테스트")
 console.log(regexp04.test(email));