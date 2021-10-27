import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class QuestionsDto1{
  @ApiProperty({
		example: '운영자님 이거 보세요',
		description: '문의 사항 제목',
	})
	@IsString()
	@IsNotEmpty()
	public title: string;

	@ApiProperty({
		example: 'jinbkim@naver.com',
		description: '유저 이메일',
	})
	@IsString()
	@IsNotEmpty()
	public email: string;

    @ApiProperty({
		example: '버그가 있어요',
		description: '문의 사항 내용',
	})
	@IsString()
	public content: string;
}

export class QuestionsDto2{
	@ApiProperty({
		example: '1',
		description: '문의 사항 id',
	})
	public question_id: number;

	@ApiProperty({
		example: '운영자님 이거 보세요',
		description: '문의 사항 제목',
	})
	public title: string;

	@ApiProperty({
		example: 'jinbkim',
		description: '유저 닉네임',
	})
	public nick: string;
}

export class QuestionsDto3{
	@ApiProperty({
		example: `[
			{
				"question_id": 1,
				"title": "운영자님 이것좀 보소",
				"nick": "jinbkim"
			},
			{
				"question_id": 2,
				"title": "문의 사항있음",
				"nick": "donglee"
			}
		]`,
		description: '문의 사항 리스트',
	})
	public questionsList: QuestionsDto2[];
}

export class QuestionsDto4{
	@ApiProperty({
		example: '1',
		description: '문의 사항 아이디',
	})
	public question_id: number;

	@ApiProperty({
		example: 'jinbkim',
		description: '유저 닉네임',
	})
	public nick: string;

  @ApiProperty({
		example: '운영자님 이거 보세요',
		description: '문의 사항 제목',
	})
	public title: string;

	@ApiProperty({
		example: 'jinbkim@naver.com',
		description: '유저 이메일',
	})
	public email: string;

    @ApiProperty({
		example: '버그가 있어요',
		description: '문의 사항 내용',
	})
	public content: string;
}