export default {
    name: 'testimonial',
    type: 'document',
    title: 'Testimonial',
    fields: [
        {
            name: 'review',
            type: 'text',
            title: 'Review'
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'designation',
            type: 'string',
            title: 'Designation'
        },
        {
            title: 'Profile Image',
            name: 'profile',
            type: 'image',
            options: {
                hotspot: true
            }
        },
    ]
}