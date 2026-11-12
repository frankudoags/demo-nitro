import { type HybridObject } from 'react-native-nitro-modules'

export interface SkMath extends HybridObject<{
  ios: 'swift',
  android: 'kotlin'
}> {
  add(a: number, b: number): number
  subtract(a: number, b: number): number
  multiply(a: number, b: number): number
  divide(a: number, b: number): number
}