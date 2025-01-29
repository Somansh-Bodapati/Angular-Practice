import { Pipe } from "@angular/core";

@Pipe({
    name: 'temp',
    standalone: true,
})

export class TemperaturePipe {
    transform(
        value: string | number | null,
        inputType: 'cel' | 'fah',
        outputType?: 'cel' | 'fah'): string {
            if (!value){
                return 'v';
            }
        let val: number;
        if (typeof value === 'string') {
            val = parseFloat(value);
        } else {
            val = value;
        }
        let outputTemp: number;
        let symbol: '°C' | '°F';

        if (inputType === 'cel' && outputType === 'fah') {
            outputTemp = val * (9 / 5) + 32;
        } else if (inputType === 'fah' && outputType === 'cel') {
            outputTemp = (val - 32) * (5 / 9);
        } else {
            outputTemp = val;
        }

        if (!outputType){
            symbol = inputType === 'cel' ? '°C' : '°F'; 
        } else {
            symbol = outputType === 'cel' ? '°C' : '°F';
        }

        return `${outputTemp.toFixed(2)} ${symbol}`;
    }
}