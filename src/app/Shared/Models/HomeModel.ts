export class ListData{
    id:number;
    email:string;
    first_name:string;
    last_name:string;
    avatar:string;
}

export class Support{
    url:string;
    text:string;
}

export class List{
    page:number;
    per_page:number;
    total:number;
    total_pages:number;
    data:ListData[];
    support:Support;
}

export class Single{
    data:ListData;
    support:Support;
}