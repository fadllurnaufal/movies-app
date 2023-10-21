const CarouselDescription = () => {
    return (
        <div className="absolute bottom-1/4 left-20 w-full text-white">
            <div className="text-7xl font-sans font-bold tracking-wide mb-6">
              {" "}
              Judul Film{" "}
            </div>
            <div className="text-2xl font-semibold font-sans tracking-wide inline-flex w-1/2 mb-6">
              <div className="mr-10">2023-08-14</div>
              <div className="inline-flex items-center gap-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                5.5
              </div>
            </div>
            <div className="text-sm font-sans tracking-wide w-1/3 mb-6 italic description text-[#f5f5f5]">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. A magni
              sed et sit. Repudiandae natus laborum cumque delectus. Rem est
              quisquam blanditiis nam dolores laboriosam maiores hic consectetur
              alias, quis, obcaecati, ab vitae accusantium! Placeat iusto iure
              voluptatem quia voluptates consequatur inventore.
            </div>
          </div>
    )
}

export default CarouselDescription