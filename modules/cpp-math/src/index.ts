import { NitroModules } from 'react-native-nitro-modules'
import type { CppMath } from './specs/CppMath.nitro'

const cppMath = NitroModules.createHybridObject<CppMath>("CppMath");

export default cppMath;