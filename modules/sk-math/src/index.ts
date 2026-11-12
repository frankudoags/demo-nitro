import { NitroModules } from 'react-native-nitro-modules'
import type { SkMath } from './specs/SkMath.nitro';

const skMath = NitroModules.createHybridObject<SkMath>("SkMath");

export default skMath;