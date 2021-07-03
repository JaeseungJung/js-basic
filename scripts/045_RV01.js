 // 정규식 (정규 표현식)
 //regular expression

 //  var txt = "Hello World! World!";

 //  var regexp = /World/gi;

 //  console.log(txt.replace(regexp, "Jason"));

 var txtR01 = "Impossible Impossible Impossible!"

 var regexpR01 = /Impossible/gi;
 // g 는 전역검색을 의미함.
 // g 뒤에 i는 대소문자 구분 없이 서치함.

 console.log(txtR01.replace(regexpR01, "Possible"))
 //clear



 //매치
 //  var str = "123849dkfjlk434sfjjlsdk5656fk22232diieeke";
 //  var regexp01 = /[0-9]/g;
 //  var result = str.match(regexp01);
 //  console.log(result);

 console.log("매치 복습");
 var strR01 = "djfld384032jkdmf293940999!@#%%"
 var regexpR02 = /[0-9]/g;
 var resultRV02 = strR01.match(regexpR02);
 console.log(resultRV02);


 //  var str02 = "red,green,blue,purple,pink,brown";
 //  var regexp02 = /(red|green)/g;
 //  var result02 = str02.match(regexp02);
 //  console.log(result02);

 console.log("매치 복습 - 커피 매치");
 var strR02 = "커피, 콜라, 커피, 사이다, 둥글레차, 커피, 커피, 카페라떼"
 var regexpR03 = /(커피|카페라떼)/g;
 var result03 = strR02.match(regexpR03);
 console.log(result03)




 var tel = "010-3334-9614";
 // 3자리 숫자 - 4자리 숫자 - 4자리
 var regexp03 = /^(010)-\d{4}-\d{4}/;
 // ^ 꺽쇠는 시작이 ()로 시작하는 것.
 // 그 다음 -를 포함할 것.
 // \d{4} 4자리 일것.

 console.log(regexp03.test(tel));


 console.log("매치 복습 - 우편번호 테스트");
 var postCode = "3319-918"
 var regexpR04 = /\d{3}-\d{3}/;
 console.log(regexpR04.test(postCode));
 //clear




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


 console.log("매치 복습 - 이메일 정규식 테스트 0629");
 var blogURL = "move09@naver.com"
 var regexpR05 = /^\w+@naver\.com/;
 console.log(regexpR05.test(blogURL))