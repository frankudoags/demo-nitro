import { type HybridObject } from 'react-native-nitro-modules'

export interface CppMath extends HybridObject<{
  ios: 'c++',
  android: 'c++'
}> {
  add(a: number, b: number): number
  subtract(a: number, b: number): number
  multiply(a: number, b: number): number
  divide(a: number, b: number): number
}