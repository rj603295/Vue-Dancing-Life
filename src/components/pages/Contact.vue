<template>
    <div style="font-family: '微軟正黑體'">
        <h2 class="text-center mt-5">聯絡我們</h2>
        <p class="text-center mt-4">需要協助，有任何問題、任何建議和指教，歡迎留下您寶貴的意見或至粉絲專頁私訊小編，我們會盡快回覆您！</p>
        <div class="container mt-5 mb-5">
            <form>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4">
                </div>
                <div class="form-group col-md-6">
                <label for="inputTel4">電話</label>
                <input type="tel" class="form-control" id="inputTel4">
                </div>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">留言</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-color">送出</button>
            </div>
            
        </form>
        </div>
        
    </div>
</template>
<style scoped lang="scss">
    .btn-color{
        background: #bda579;
        color: white;
        &:hover{
            background: #97825b;
            color: white;
        }
    }
</style>