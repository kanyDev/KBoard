$(function(){
    // [추가] 버튼 누르면 첨부 파일 추가 기능
    let i = 0;
    // 버튼이 클릭될때 마다 i가 1 증가해 name 값이 다르게 서버에 등록
    $("#btnAdd").click(function (){
        $("#files").append(`
            <div class="input-group mb-2">
               <input class="form-control col-xs-3" type="file" name="upfile${i}"/>
               <button type="button" class="btn btn-outline-danger" onclick="$(this).parent().remove()">삭제</button>
            </div>
        `);
        i++;
    });

    // Summernote 추가
    $("#content").summernote({
        height: 300,

    });

});