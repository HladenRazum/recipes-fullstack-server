interface likeCountInterface {
   type: number;
   default: 0;
}

interface createdAtInterface {
   type: Date;
   default: Date;
}

export interface RecipeInterface {
   title: string;
   description: string;
   likeCount: likeCountInterface;
   createdAt: createdAtInterface;
   tags?: string;
}
