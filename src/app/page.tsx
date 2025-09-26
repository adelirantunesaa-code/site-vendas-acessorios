"use client"

import { useState, useEffect } from 'react'
import { Star, ShoppingCart, Instagram, Truck, Shield, Clock, Phone, Mail, MapPin, ChevronRight, Zap, Award, Users } from 'lucide-react'

export default function AutoPartsProSite() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 45, seconds: 30 })

  // Countdown timer para criar urgência
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Rotação automática de depoimentos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const products = [
    {
      id: 1,
      name: "Kit Xenon H4 8000K",
      price: "R$ 89,90",
      originalPrice: "R$ 149,90",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 234,
      discount: "40% OFF",
      affiliate: "https://hotmart.com/pt-br/marketplace/produtos/kit-xenon-h4"
    },
    {
      id: 2,
      name: "Capa de Banco Couro Ecológico",
      price: "R$ 159,90",
      originalPrice: "R$ 249,90",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 189,
      discount: "36% OFF",
      affiliate: "https://hotmart.com/pt-br/marketplace/produtos/capa-banco-couro"
    },
    {
      id: 3,
      name: "Central Multimídia Android",
      price: "R$ 299,90",
      originalPrice: "R$ 499,90",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      rating: 4.7,
      reviews: 156,
      discount: "40% OFF",
      affiliate: "https://hotmart.com/pt-br/marketplace/produtos/central-multimidia"
    },
    {
      id: 4,
      name: "Alarme Automotivo Positron",
      price: "R$ 129,90",
      originalPrice: "R$ 199,90",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      rating: 4.6,
      reviews: 98,
      discount: "35% OFF",
      affiliate: "https://hotmart.com/pt-br/marketplace/produtos/alarme-positron"
    },
    {
      id: 5,
      name: "Película Insulfilm G20",
      price: "R$ 79,90",
      originalPrice: "R$ 129,90",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=300&fit=crop",
      rating: 4.8,
      reviews: 267,
      discount: "38% OFF",
      affiliate: "https://hotmart.com/pt-br/marketplace/produtos/pelicula-insulfilm"
    },
    {
      id: 6,
      name: "Kit Pneu Aro 17 Pirelli",
      price: "R$ 899,90",
      originalPrice: "R$ 1299,90",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      rating: 4.9,
      reviews: 145,
      discount: "31% OFF",
      affiliate: "https://hotmart.com/pt-br/marketplace/produtos/kit-pneu-pirelli"
    }
  ]

  const testimonials = [
    {
      name: "Carlos Silva",
      location: "São Paulo, SP",
      text: "Comprei o kit xenon e a qualidade superou minhas expectativas! Instalação fácil e resultado profissional.",
      rating: 5,
      product: "Kit Xenon H4"
    },
    {
      name: "Ana Costa",
      location: "Rio de Janeiro, RJ", 
      text: "As capas de banco ficaram perfeitas no meu carro. Material de primeira qualidade e entrega rápida!",
      rating: 5,
      product: "Capa de Banco Couro"
    },
    {
      name: "Roberto Lima",
      location: "Belo Horizonte, MG",
      text: "Central multimídia funcionando perfeitamente há 6 meses. Recomendo demais a AutoParts Pro!",
      rating: 5,
      product: "Central Multimídia"
    }
  ]

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=300&h=300&fit=crop",
      likes: 1234,
      comments: 45
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
      likes: 987,
      comments: 32
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop",
      likes: 1567,
      comments: 78
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=300&fit=crop",
      likes: 2134,
      comments: 89
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white sticky top-0 z-50 shadow-2xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                AutoParts Pro
              </h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>contato@autopartspro.com</span>
              </div>
              <a 
                href="https://instagram.com/autopartspro" 
                target="_blank"
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <Instagram className="h-4 w-4" />
                <span className="text-sm font-medium">Seguir</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Oferta Urgente */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 text-center">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 animate-pulse" />
              <span className="font-bold">OFERTA RELÂMPAGO!</span>
            </div>
            <span>Até 40% OFF em todos os produtos</span>
            <div className="flex items-center space-x-2 bg-black/20 px-3 py-1 rounded-full">
              <span className="text-sm">Termina em:</span>
              <span className="font-mono font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transforme seu 
                <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent"> veículo</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Os melhores acessórios automotivos com qualidade premium, 
                preços imbatíveis e entrega rápida para todo o Brasil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                  Ver Ofertas Especiais
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all duration-300">
                  Falar no WhatsApp
                </button>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-600">+50.000 clientes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-orange-500" />
                  <span className="text-gray-600">98% satisfação</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop" 
                alt="Carro com acessórios" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Garantia Total</p>
                    <p className="text-sm text-gray-600">12 meses de proteção</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Produtos Mais Vendidos
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Selecionamos os melhores acessórios com base nas avaliações dos nossos clientes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h4>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews} avaliações)</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl font-bold text-green-600">{product.price}</span>
                    <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                  </div>
                  <a 
                    href={product.affiliate}
                    target="_blank"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 rounded-full font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Comprar Agora</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a AutoParts Pro?
            </h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-green-400 to-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Entrega Rápida</h4>
              <p className="text-gray-600 leading-relaxed">
                Entregamos em todo o Brasil com frete grátis acima de R$ 199. 
                Receba seus produtos em até 5 dias úteis.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Garantia Total</h4>
              <p className="text-gray-600 leading-relaxed">
                Todos os produtos com garantia de 12 meses. 
                Troca grátis em caso de defeito ou insatisfação.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Qualidade Premium</h4>
              <p className="text-gray-600 leading-relaxed">
                Produtos selecionados das melhores marcas do mercado. 
                Qualidade testada e aprovada por milhares de clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h3>
            <p className="text-xl text-gray-600">
              Mais de 50.000 clientes satisfeitos em todo o Brasil
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                    <p className="text-sm text-orange-600">Comprou: {testimonials[currentTestimonial].product}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Integration */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Instagram className="h-8 w-8 text-pink-600" />
              <h3 className="text-4xl font-bold text-gray-900">
                Siga no Instagram
              </h3>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Acompanhe as novidades, dicas e transformações incríveis dos nossos clientes
            </p>
            <a 
              href="https://instagram.com/autopartspro" 
              target="_blank"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <Instagram className="h-6 w-6" />
              <span>@autopartspro</span>
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramPosts.map((post) => (
              <div key={post.id} className="relative group cursor-pointer overflow-hidden rounded-2xl">
                <img 
                  src={post.image} 
                  alt="Instagram post"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Star className="h-5 w-5 fill-current" />
                        <span>{post.likes}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Instagram className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-5xl font-bold mb-6">
            Pronto para transformar seu veículo?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Aproveite nossas ofertas especiais e receba seus produtos com frete grátis. 
            Garantia total e suporte especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-12 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
              Ver Todos os Produtos
            </button>
            <button className="border-2 border-white text-white px-12 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-300">
              Falar no WhatsApp
            </button>
          </div>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Clock className="h-4 w-4" />
            <span>Oferta válida por tempo limitado</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                  AutoParts Pro
                </h4>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sua loja especializada em acessórios automotivos premium. 
                Qualidade, confiança e satisfação garantida.
              </p>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Produtos</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-400 transition-colors">Iluminação</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Som e Multimídia</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Segurança</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Conforto</a></li>
                <li><a href="#" className="hover:text-orange-400 transition-colors">Performance</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Atendimento</h5>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@autopartspro.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>São Paulo, SP</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-bold mb-4">Redes Sociais</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://instagram.com/autopartspro" 
                  target="_blank"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-full hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <p className="text-gray-400 mt-4 text-sm">
                Siga-nos para dicas, novidades e ofertas exclusivas!
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoParts Pro. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              CNPJ: 00.000.000/0001-00 | Desenvolvido com ❤️ para transformar seu veículo
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}