/**
 * Организует наследование для функций-конструкторов
 * @param {Function} Child Дочерний конструктор
 * @param {Function} Parent Родительский конструктор
 */
function inherit(Child, Parent) {
    function F() {}
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}
