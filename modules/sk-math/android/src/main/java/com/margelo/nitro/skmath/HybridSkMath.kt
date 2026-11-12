package com.margelo.nitro.skmath

class HybridSkMath : HybridSkMathSpec() {
    override fun add(a: Double, b: Double): Double {
        return a + b;
    }

    override fun subtract(a: Double, b: Double): Double {
        return a - b;
    }

    override fun multiply(a: Double, b: Double): Double {
        return a * b;
    }

    override fun divide(a: Double, b: Double): Double {
        return a / b;
    }
}