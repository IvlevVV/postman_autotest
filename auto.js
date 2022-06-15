// autotest for method  https://api.hh.ru/suggests/skill_set?text=Тестирование пользовательского интерфейса


pm.test("id=2836", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.items[0].id).to.eql("2836");
});
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("id");
});
pm.test("Date is present", function () {
    pm.response.to.have.header("Date");
});
pm.test("Status code name has string", function () {
    pm.response.to.have.status("OK");
});