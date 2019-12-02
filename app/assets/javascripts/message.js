$(function(){

  function buildHTML(message){
    // 「もしメッセージに画像が含まれていたら」という条件式
    if (message.image) {
      // var html = //メッセージに画像が含まれる場合のHTMLを作る
      var content = message.content ? `${ message.content }` : "";
      var img = message.image ? `<img src= ${ message.image }>` : "";
      var html = `<div class="message" data-id="${message.id}">
                    <div class="message__detail">
                      <p class="message__detail__current-user-name">
                        ${message.user_name}
                      </p>
                      <p class="message__detail__date">
                        ${message.date}
                      </p>
                    </div>
                    <p class="message_body">
                      <div>
                      ${content}
                      </div>
                      ${img}
                    </p>
                  </div>`
    } else {
      // var html = //メッセージに画像が含まれない場合のHTMLを作る      
      var content = message.content ? `${ message.content }` : "";
      // var img = message.image ? `<img src= ${ message.image }>` : "";
      var html = `<div class="message" data-id="${message.id}">
                    <div class="message__detail">
                      <p class="message__detail__current-user-name">
                        ${message.user_name}
                      </p>
                      <p class="message__detail__date">
                        ${message.date}
                      </p>
                    </div>
                    <p class="message_body">
                      <div>
                      ${content}
                      </div>

                    </p>
                  </div>`
    }
    return html
  }
  // console.log('イベント発火')

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.contentsright').append(html);
      $('.contentsright').animate({ scrollTop: $('.contentsright')[0].scrollHeight});
      // $('.messages').append(html);
      // $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('#message_content').val(''); //input内のメッセージを消しています。
    })
    .fail(function(data){
      alert('エラーが発生したためメッセージは送信できませんでした。');
    })
    .always(function(data){
      $('.form__submit').prop('disabled', false);
    })
  })
})