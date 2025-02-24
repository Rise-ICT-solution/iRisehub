function Header(){
    const menuRef = useRef()
        const [ IsMenuOpen, setIsMenuOpen] = useState(false)
        const [IsHeaderOpen, setIsHeaderOpen] = useState(false)
        // const [logoSize, setLogoSize] = useState("large")
        // const [IsHeroSectionVisible, setIsHeroSectionVisible] = useState(true)
        const MenuOpen = () =>{
            setIsMenuOpen(true)
        }
        const MenuClose = () =>{
            setIsMenuOpen(false)
        }
    
        // const HeaderScrolled = () => {
        //     setIsHeaderOpen(true)
        // }
    
        // UseEffect gan wuxuu qaabilsan yahay marka lagu dhufto hero section screen meel waliba oo kamid  in uu menu bar close gareyo
        useEffect(() => {
            const HandleClickOutside = (e) => {
                if (menuRef.current && !menuRef.current.contains(e.target)){
                    MenuClose()
                }
            }
            document.addEventListener('mousedown', HandleClickOutside);
            return () => {
                document.removeEventListener('mousedown', HandleClickOutside);
            }
        })
        // useEffect gan wuxuu qaabil san yahay marka menu bar uu furan yahay inuusan scroll gareesmin 
        // menu bar ama opacity waxa ka dambeya yacni body ga website hadii  ama la scroll gareyana wax shaqo ma qabanayo
        useEffect(() => {
            if (IsMenuOpen){
                document.body.classList.add("overflow-hidden");
            }
            else{
                document.body.classList.remove("overflow-hidden");
            }
        },[IsMenuOpen]) 
        
        //useEffect gan wuxuu qaabil san yahay logo-da marka la jogo hero section inay wayn ahaato marka la scroll gareyo oo laga hero section inay yaraato logo-da
        useEffect(() => {
            const HandleScroll = () => {
                const scrollY = window.scrollY
                const HeroSectionHeight = document.getElementById('hero-section').offsetHeight;
                if (scrollY > HeroSectionHeight){
                    setLogoSize("small")
                    setIsHeroSectionVisible(false)
                }
                else {
                    setLogoSize('large')
                    setIsHeroSectionVisible(true)
                }
            }
            window.addEventListener('scroll', HandleScroll)
            return () => {
                window.removeEventListener('scroll', HandleScroll)
            }
        },[])
    return <div>

    </div>
}
export default Header