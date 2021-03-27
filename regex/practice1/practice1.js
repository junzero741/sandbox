
document.getElementById("searchSubmit").onclick = function () {

    // 패턴 구하기
    let re = getPattern();


    // 문자열 구하기
    var searchString = document.getElementById("incoming").value;
    var matchArray;
    var resultString = "<pre>";
    var first = 0;
    var last = 0;
    debugger;
    // 각각의 일치하는 부분 검색
    while ((matchArray = re.exec(searchString)) != null) {
        last = matchArray.index;

        // 일치하는 모든 문자열을 연결
        resultString += searchString.substring(first, last);

        // 일치하는 부분에 강조 스타일이 지정된 class 추가
        resultString += "<span class='found'>" + matchArray[0] + "</span>";
        first = re.lastIndex;
        // RegExp객체의 lastIndex속성을 이용해 검색 결과의 마지막인덱스 접근 가능
    }

    // 문자열 종료
    resultString += searchString.substring(first, searchString.length);
    resultString += "</pre>";

    // 화면에 출력
    document.getElementById("searchResult").innerHTML = resultString;
}

function getPattern() {
    var pattern = document.getElementById("pattern").value;
    return new RegExp(pattern, "g");
}