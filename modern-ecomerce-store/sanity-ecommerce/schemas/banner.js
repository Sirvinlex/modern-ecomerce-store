export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    //   {
    //       name: 'image',
    //       title: 'Image',
    //       type: 'image',
    //       options: {
    //           hotspot: true,
    //       },
    //   },
    //   {
    //       name: 'buttonText',
    //       title: 'ButtonText',
    //       type: 'string',
    //   },
    //   {
    //       name: 'product',
    //       title: 'Product',
    //       type: 'string',
    //   },
    //   {
    //       name: 'desc',
    //       title: 'Desc',
    //       type: 'string',
    //   },
    //   {
    //       name: 'smallText',
    //       title: 'SmallText',
    //       type: 'string',
    //   },
    //   {
    //       name: 'midText',
    //       title: 'MidText',
    //       type: 'string',
    //   },
    //   {
    //       name: 'largeText1',
    //       title: 'LargeText1',
    //       type: 'string',
    //   },
    //   {
    //       name: 'largeText2',
    //       title: 'LargeText2',
    //       type: 'string',
    //   },
    //   {
    //       name: 'discount',
    //       title: 'Discount',
    //       type: 'string',
    //   },
    //   {
    //       name: 'saleTime',
    //       title: 'SaleTime',
    //       type: 'string',
    //   },
    {
            name:'image',
            title:'Image',
            type:'array',
            of:[{type:'image'}],
            options:{
                hotspot:'true',
            }
        },
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'slug',
            title:'Slug',
            type:'slug',
            options: {
                source:'name',
                maxLength: 90,
            }
        },
        {
            name:'price',
            title:'price',
            type:'number',
        },
        {
            name:'details',
            title:'Details',
            type:'string',
        }
  ],
};