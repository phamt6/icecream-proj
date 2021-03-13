import { IsDefined, IsInt, Min } from 'class-validator';

export default class RequestBodyDto {
    @IsDefined()
    @IsInt()
    @Min(0)
    count: number;

    @IsDefined()
    @Min(0)
    barPrice: number;
    
    @IsDefined()
    @Min(0)
    packPrice: number;
    
    @IsDefined()
    @Min(0)
    boxPrice: number;

    @IsDefined()
    @IsInt()
    @Min(0)
    packSize: number;

    @IsDefined()
    @IsInt()
    @Min(0)
    boxSize: number;
}