//% weight=100 color=#0fbc11 icon="\uf1ec"
namespace INA219 {
    //% block
    export function readVoltage(): number {
        return 5.0 // 仮値、実装が必要
    }

    //% block
    export function readCurrent(): number {
        return 0.2 // 仮値、実装が必要
    }

    //% block
    export function readPower(): number {
        return readVoltage() * readCurrent()
    }
}
