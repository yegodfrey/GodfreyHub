---
name: cangjie-faqs/06-static
title: 仓颉语言中如何访问类的静态变量和方法
uri: https://developer.huawei.com/consumer/cn/doc/cangjie-faqs/06-static
nodePath: FAQ / 语法 / 仓颉语言中如何访问类的静态变量和方法
---

# 仓颉语言中如何访问类的静态变量和方法

在仓颉语言中，需要通过类名访问类的静态变量和方法。

下述示例，通过People类名调用getPeopleNumber()静态方法；通过Student类名，调用getStudentNumber()静态方法
    
    
    open class People {
        private var name: String
        private var age: Int64
        private static var number = 0
    
        public init(name: String, age: Int64) {
            this.name = name
            this.age = age
            number++
        }
    
        public static func getPeopleNumber() {
            return number
        }
    }
    
    class Student <: People {
        private var gradeNO: Int8
        private var classNO: Int8
        private static var number = 0
    
        public init(name: String, age: Int64, gradeNO: Int8, classNO: Int8) {
            super(name, age)
            this.gradeNO = gradeNO
            this.classNO = classNO
            number++
        }
    
        public static func getStudentNumber() {
            return number
        }
    }
    
    public func FAQ11Test(): Unit {
        let student1 = Student("小华", 7, 1, 1)
        let student2 = Student("小明", 8, 2, 4)
        let student3 = Student("小红", 7, 1, 3)
        let student4 = People("王芳", 27)
        Hilog.info(0, "Cangjie Test", "People: ${People.getPeopleNumber()}")
        Hilog.info(0, "Cangjie Test", "Student: ${Student.getPeopleNumber()}")
    }

调用FAQ11Test，日志输出结果：
    
    
    People: 4
    Student: 3
