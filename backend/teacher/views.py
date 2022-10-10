from django.shortcuts import get_object_or_404

from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST


from teacher.models import Aula, Professor
from teacher.serializers import ProfessorSerializers, CadastrarAulaSerializer, AulaSerializer


class ProfessorAPIView(APIView):
    def get(self, request, format=None):
        professores = Professor.objects.all()
        seralizer = ProfessorSerializers(professores, many=True)
        return Response(seralizer.data, status=HTTP_200_OK)


class CadastrarAulaAPIView(APIView):
    def post(self, request, id, format=None):
        professor = get_object_or_404(Professor, id=id)
        seralizer = CadastrarAulaSerializer(data=request.data)
        if seralizer.is_valid():
            aula = Aula(
                nome=seralizer.validated_data.get('nome'),
                email=seralizer.validated_data.get('email'),
                professor=professor
            )
            aula.save()
            aula_serializer = AulaSerializer(aula, many=False)
            return Response(aula_serializer.data, status=HTTP_201_CREATED)
        return Response({
            "message" : "Houveram erros de validação", "errors" : seralizer.errors
            },
             status=HTTP_400_BAD_REQUEST)